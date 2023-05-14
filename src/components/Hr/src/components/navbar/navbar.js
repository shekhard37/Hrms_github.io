import React from "react";
import { Link,NavLink } from "react-router-dom";

import "./navbar.css"


class Nav extends React.Component{

    render(){
        return(
       <div className="navbarm">
            <div className="NavB">
                <div className="inNav"> 
                    <NavLink to="/login" className="nav">Login</NavLink>
                    <NavLink to="/otp" className="nav">Home</NavLink>
                    <NavLink to="/contactus" className="nav">Contact us</NavLink>
                </div>
            </div>
        </div>
      
         ) }
    }


export default Nav;