import React from "react";
import "./Attendance.css";

const Payroll =() =>{
    return(
        <>
        <div className="hr-att">
            <div className="hr-att2">
            <h1>Payroll</h1>
            <p>From</p>
            <input type="date"></input>
            <p>To</p>
            <label>
            <input type="date"></input></label>
            <br></br>
            <button>Submit</button>
            </div>
        </div>

        </>
    )
}

export default Payroll;