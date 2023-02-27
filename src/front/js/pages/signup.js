import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import {useNavigate} from "react-router-dom"
import "../../styles/home.css";


export const Signup = () => {
const {store, actions} = useContext(Context);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();   


const handleClickSignup = () =>{
    

fetch("https://3001-4geeksacade-reactflaskh-vp4sjbpvukj.ws-eu88.gitpod.io/api/signup",{
    method: "POST",    
    body: JSON.stringify({
        "email": email,
        "password": password,
        "is_active": false
}),
    headers: {'Content-Type': 'application/json'}

})
.then((response) => {
    console.log(response.ok); // will be true if the response is successfull
    console.log(response.status); // the status code = 200 or code = 400 etc.
    return response.json();
        }) 

    

}

                    

    return (
        <>
        {store.token && store.token != "" && store.token != undefined  ? ("You are logged"):( 
             <div className="container">
                    <h1>Regístrate para usar la app</h1>
                    <div className="mb-3 col-lg-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value ={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-lg-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>
                   
                        <button onClick={handleClickSignup} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success">Submit</button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Usuario creado correctamente
                                    </div>
                                    
                                    </div>
                            </div>
                        </div>
            </div>
        )}
        </>

    );
};