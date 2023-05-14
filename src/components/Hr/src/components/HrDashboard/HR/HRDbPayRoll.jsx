import React from 'react';


import "./HRDashboard.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Payroll from '../components/PayRoll/Payroll';
import HRsideBar from "../components/HRSideBar/HRsideBar";


function HRDbPayRoll() {
  return (
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
            <Payroll/>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default HRDbPayRoll;