import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {


    useEffect(() =>{
        fetch("https://3001-4geeksacade-reactflaskh-vp4sjbpvukj.ws-eu87.gitpod.io/api/signup", {
        method: "POST",
        body: JSON.stringify(email,pasword),
        headers: {
                "Content-Type": "application/json"
                 }
         })

        .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
        })

        .then((body) => {
        console.log("Este es el body", body)
        })
        .catch(error => console.error("Error:", error))

        },[])

    return (
        <>
        <div className="container">
            <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>

    );
};