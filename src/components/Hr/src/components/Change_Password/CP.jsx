import React from "react";
import { useState } from "react";
import "./cp.css"
import lock from "./lock.svg"
import { Link } from "react-router-dom";
import Nav from "../navbar/navbar";



const ChangeP = () => {

    // const [date,setDate]=useState();
    const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
    



    return(
        <div className="cp-main">
            
            <center>
        <div className="cp-main2">
            <div className="cp-img">
                <img src={lock} className="cp-lock" alt="lock" />
                </div>
            <h1>Change Password</h1>
        
            <div className="cp-inputs">
                <input type="text" placeholder="New Password" required></input>
                <input type="text" placeholder="Confirm Password" required></input> 

               <Link to="/login"> <button id="fp-b" onClick={popup}>Reset</button> </Link>
            </div>
            <br></br>

            
            
        </div>
            </center>
        </div>
    )
}

export default ChangeP