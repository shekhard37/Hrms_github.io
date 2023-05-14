import React from "react";
import "./HRDashboard.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Attendance from "../components/Attendance/HRAttendance";
import HRsideBar from "../components/HRSideBar/HRsideBar";

const HRDashBoard =() => {
    return(
        <>
        <div className="HRDb-main">
            <div className="x"></div>
            <div className="hr-components">
                
                <div className="HrNav-main">
                    <div  className="HrNav-main2">
                    <HRsideBar/>
                    </div>
                </div>

                <div className="Hrdb-components2">
                <Attendance/>
                </div>
               
            </div>
            

        </div>
        </>
    )
}

export default HRDashBoard;