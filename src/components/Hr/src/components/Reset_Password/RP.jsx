import React from "react";
import { useState } from "react";
import "./rp.css"
import lock from "./lock.svg"
import { Link } from "react-router-dom";
import Nav from "../navbar/navbar";


const OTP = () => {

    // const [date,setDate]=useState();
    const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
    



    return(
        <div>
            <div>
            <Nav/>
            </div>
        
        
        
        <div className="rp-main">
        
            <center>
            
        <div className="rp-main2">
        
            <div className="rp-img">
                <img src={lock} className="rp-lock" alt="lock" />
                </div>
            <h1>OTP</h1>
            <p>OTP sent to your email</p>

            <div className="rp-inputs">
                <div className="rp-otp">
                <input type="text" id="rp-in"></input>
                <input type="text" id="rp-in"></input>
                <input type="text" id="rp-in"></input>
                <input type="text" id="rp-in"></input>
                <input type="text" id="rp-in"></input>
                <input type="text" id="rp-in"></input>
                </div>
                
                 </div>
                 <Link to="/changep"> <button id="fp-b" onClick={popup}>Submit</button> </Link>
           
            <br></br>

            {/* <div className={popupStyle}>
                  
                    
                    <div className="fp-pop">
                        <div className="fp-pop2"></div>
                        <div className="fp-pop1">
                        <p>Reset link has been sent to your email</p>
                        </div>
                        
                    </div>
                {/* <h5>X</h5>
                <h5>X</h5> *
                </div> */}
            
        </div> 
            </center>
        </div>
        </div>
    )
}

export default OTP