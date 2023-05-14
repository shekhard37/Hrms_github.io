import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HRsideBar.css";
import signout from "./signout.svg";


const HRsideBar = () =>{
    return(
        <>
            <div className="hrNav-main">
               
            <NavLink to="/hrdashboard" className="sidebar1">Attendance</NavLink>
            <NavLink to="/hrdbpayroll" className="sidebar1">Payroll</NavLink>
            <NavLink to="/hrdbemployee" className="sidebar1">Employees</NavLink>
            <NavLink to="/" className="sidebar1">Applicants</NavLink>
            <NavLink to="/" className="sidebar1">Queries</NavLink>
            <NavLink to="/" className="sidebar1">Profile</NavLink>
            <NavLink to="/hrdbleave" className="sidebar1">Leaves</NavLink>
                <div className="signout">
                    <div className="signout2">
                    <NavLink to="/login" className="signout3">Sign Out</NavLink>
                    
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default HRsideBar;