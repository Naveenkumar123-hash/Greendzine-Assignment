import React from "react";
import Logo from "../../../Assets/Logo.png"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import "./Login.css"

const Login=()=>{
    const navigate=useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const handlefn=(event)=>{
        event.preventDefault()
        if(!email || !password){
            alert("All Fields are required")
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            alert("You have entered an invalid email address!")
            return;
        }
        if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password))) {
            alert(" Password should must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
            return;
        }
        else{
        navigate("/dashboard")
        }
    }

    return(
        <div className="login">
            <div className="logo">
                 <img src={Logo}></img>
                 <h3 style={{fontFamily:"mulish",fontWeight:"regular",fontSize:"18px",color:"#36A546CC"}}>We are Electric</h3>
            </div>
            <form onSubmit={handlefn} name="myForm">
                 <input type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}></input>
                 <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                 <button type="submit">Login</button>
                 <a href="#">Forget Password?</a>
            </form>
        </div>
    )
}

export default Login