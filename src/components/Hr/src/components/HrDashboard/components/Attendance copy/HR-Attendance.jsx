import React from "react";
import "./HRDashboard.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Attendance from "../Attendance/HRAttendance";
import HRsideBar from "../HRSideBar/HRsideBar";
import Login from "../../../Login/Login";

const HRAtt =() => {
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
                    <BrowserRouter>
                    <Routes>
                        <Route path="/att" element={<Attendance/>}></Route>
                    </Routes>
                    </BrowserRouter>
                <Attendance/>
                </div>
               
            </div>
            

        </div>
        </>
    )
}

export default HRAtt;