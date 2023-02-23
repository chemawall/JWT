import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Login = () => {
const {store, actions} = useContext(Context);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");    


   
const handleClick = () => {
        actions.login(email,password).then(()=>{
            console.log("todo ok")
        })
    
}
                    

    return (
        <>
        {(store.token && store.token != "" && store.token != undefined ) ? "You are logged" : 
             <div className="container">
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value ={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>
                   
                        <button onClick={handleClick}  className="btn btn-primary">Submit</button>
             
        </div>
          }     
        </>

    );
};