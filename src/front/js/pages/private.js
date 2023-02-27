import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			{(store.token && store.token !="" && store.token != undefined) ? 
			
			<iframe width="560" height="315" src="https://www.youtube.com/embed/6iFbuIpe68k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			:
			<h1>Logueate antes miarma</h1> }
			
		</div>
	);
};
