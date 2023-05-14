import React from "react";
import "./Employee.css";
import { NavLink } from "react-router-dom";

const HREmployee = () =>{
    return(
        <>
            <div className="hr-leave-main">
                <div className="hr-leave-main2">
                <header><h1>Employee Table</h1></header>
                    <div className="hr-leave-data">
                    </div>
                    <div className="hr-leave-apply">
                       <NavLink to="/hrdbaddemployee"> <button>Add Employee</button></NavLink>
                    </div>
                   
                </div>
                
            </div>
        </>

    )
}

export default HREmployee;