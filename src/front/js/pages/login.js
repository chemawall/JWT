import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {

const [email, SetEmail] = useState("");
const [password, SetPassword] = useState("");    

   
const handleClick=()=>{
        
    

            const opts ={
                method: "POST",
                 body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "is_active": true
                 })

            }
            fetch('https://3001-4geeksacade-reactflaskh-vp4sjbpvukj.ws-eu87.gitpod.io/api/login',opts)
            .then((response) => {
                if 
            }
            .then()
            .catch(error =>{
                console.error("hay un error", error);
            })
                  


    }

    return (
        <>
        <div className="container">
            <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value ={email} onChange={(e)=> SetEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e)=> SetPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                        <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>

    );
};