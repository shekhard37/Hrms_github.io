import React from "react";
import { useState } from "react";
import "./ApplyLeave.css"
import { NavLink } from "react-router-dom";



const ApplyLeave = () => {

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
            {/* <div className="fp-img">
                <img src={lock} className="fp-lock" alt="lock" />
                </div> */}
            <h1>ApplyLeave</h1>
            <p>You can apply your leave</p>

            <div className="fp-inputs">
                <select>
                    <option>Leave 1</option>
                    <option>Leave 2</option>
                    <option>Leave 3</option>
                    <option>Leave 4</option>
                </select>
              
                <input type="date" placeholder="DOB" required></input> 
                
                <input type="date" placeholder="DOB" required></input> 
                <input type="text" placeholder="Reason" required></input> 

               <button id="fp-b">Submit</button> 
               <NavLink to="/hrdbleave"><button id="fp-b2">Cancel</button></NavLink>
            </div>
            <br></br>

            
            
        </div>
            </center>
        </div>
    )
}

export default ApplyLeave