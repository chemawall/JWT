"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
@jwt_required
def get_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def signup():
    data = request.json

    user = User(email=data['email'], password=data['password'], is_active=data['is_active'])
    db.session.add(user)
    db.session.commit()
    

    return jsonify({"message": "usuario creado"}), 200


@api.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    
    if user:
        token = create_access_token(identity=user.id)
        return jsonify({"token":token}),200

    return jsonify({"message": "usuario incorrecto"}), 200

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()

    return jsonify(user.serialize()),200