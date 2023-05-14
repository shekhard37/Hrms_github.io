import React,{useState} from "react";

import logo from './logo1112.png';
import logo2 from './logofront.png';
import Nav from "../navbar/navbar";
import "../Login/Login.css"
import './Contact.css';
import { Link } from "react-router-dom";

const ContactUs = () =>{

    const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }

        return(
            
           <div  className="Lo-main">
            <div className="login-main">
            <div className="nav-main1"><Nav/></div> 
                 
            <div className="Lmain">
            
                <div className="parent">
                <img src={logo} className="App-logo" alt="logo" />
                <img src = {logo2} id="x" className="App-logo2" alt="logo" /> 
           </div>

            
            <div className="Login">
                
                <div >
                <h2>Contact Us</h2>
                </div>
                <div className="c-L_details">
                <input type="text" placeholder="Full Name" required/>
                <input type="text" placeholder="Phone" required/>
                <input type="text" id="msg" placeholder="Message" required/>
                
                
                <Link to="/welcome"><button onClick={popup}>Submit</button></Link>
                 
               
                </div>

                <div className={popupStyle}>
                  
                    <div className="in-pop"></div>
                    <div className="in-pop"></div>
                {/* <h5>X</h5>
                <h5>X</h5> */}
                </div>
               
        </div>
        </div>
        </div>
        </div>
         ) 
    }


export default ContactUs;