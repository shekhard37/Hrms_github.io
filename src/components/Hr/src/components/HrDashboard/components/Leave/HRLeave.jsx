import React from "react";
import "./HRLeave.css";
import { NavLink } from "react-router-dom";

const HRLeave = () =>{
    return(
        <>
            <div className="hr-leave-main">
                <div className="hr-leave-main2">
                <header><h1>Leave Balance</h1></header>
                    <div className="hr-leave-data">
                    
                    <div className="leaves-type">
                        <h3>Leave Type 1</h3>
                        
                        <div className="leave-info">
                        <h1>12</h1>
                        </div>
                    </div>

                    <div className="leaves-type">
                    <h3>Leave Type 2</h3>
                        <div className="leave-info">
                        <h1>02</h1>
                        </div>
                    </div>

                    <div className="leaves-type">
                    <h3>Leave Type 3</h3>
                        <div className="leave-info">
                        <h1>06</h1>
                        </div>

                    </div>

                    <div className="leaves-type">
                    <h3>Leave Type 4</h3>
                        <div className="leave-info">
                        <h1>10</h1>
                        </div>
                    </div>
                    </div>

                    <div className="hr-leave-apply">
                       <NavLink to="/hrdbapplyleave"> <button>Apply Leave</button></NavLink>
                    </div>
                   
                </div>
                
            </div>
        </>

    )
}

export default HRLeave;