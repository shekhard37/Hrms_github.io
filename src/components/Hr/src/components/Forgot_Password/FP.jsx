import React from "react";
import { useState } from "react";
import "./fp.css"
import lock from "./lock.svg"
import { Link } from "react-router-dom";
import Nav from "../navbar/navbar";


const ForgotP = () => {

    // const [date,setDate]=useState();
    const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
    



    return(
        <div className="fp-main">
            
            <center>
        <div className="fp-main2">
            <div className="fp-img">
                <img src={lock} className="fp-lock" alt="lock" />
                </div>
            <h1>Forgot Password?</h1>
            <p>You can reset your password here</p>

            <div className="fp-inputs">
                <input type="email" placeholder="Email" required></input>
                <input type="date" placeholder="DOB" required></input> 

               <Link to="/otp"> <button id="fp-b" onClick={popup}>Reset</button> </Link>
            </div>
            <br></br>

            <div className={popupStyle}>
                  
                    
                    <div className="fp-pop">
                        <div className="fp-pop2"></div>
                        <div className="fp-pop1">
                        <p>Reset link has been sent to your email</p>
                        </div>
                        
                    </div>
                {/* <h5>X</h5>
                <h5>X</h5> */}
                </div>
            
        </div>
            </center>
        </div>
    )
}

export default ForgotP