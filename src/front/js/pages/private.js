import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			{(store.token && store.token !="" && store.token != undefined) ? 
			<h1>Alto, estás logueado</h1>
			:
			<h1>Logueate antes miarma</h1> }
			
		</div>
	);
};
