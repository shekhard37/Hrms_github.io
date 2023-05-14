import React from "react";
import { Link } from "react-router-dom";
import "./hrNav.css";


const HrNav = () =>{
    return(
        <>
            <div className="hrNav-main">
               
                <Link><button className="hrnav-button">Attendance</button></Link>
                <Link><button className="hrnav-button">Payroll</button></Link>
                <Link><button className="hrnav-button">Employees</button></Link>
                <Link><button className="hrnav-button">Applicants</button></Link>
                <Link><button className="hrnav-button">Leave</button></Link>
                <Link><button className="hrnav-button">Queries</button></Link>
                <Link><button className="hrnav-button">Profile</button></Link>
            </div>
           
        </>
    )
}

export default HrNav;