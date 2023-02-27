import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link, } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>¿Quieres acceder a nuestra zona privada?</h1>
			<Link to="/private">
			<button className="btn btn-primary">Pulsa aqui</button>
			</Link>	
		</div>
	);
};
