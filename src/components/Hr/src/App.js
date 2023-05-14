import logo from './logo1112.png';
import logo2 from './logofrontc.svg';
import './App.css';
import Image from './image';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



// import { Switch, Route} from "react-router-dom";

import Login from './components/Login/Login';
import Nav from './components/navbar/navbar';
import Welcome from './components/Welcome/Welcome';
import ForgotP from './components/Forgot_Password/FP';
import OTP from './components/Reset_Password/RP';
import ChangeP from './components/Change_Password/CP';
import ContactUs from './components/ContactUs/Contact';

import HRDashBoard from './components/HrDashboard/HR/HRDashboard';
import Attendance from './components/HrDashboard/components/Attendance/HRAttendance';
import HRAtt from './components/HrDashboard/components/Attendance/HR-Attendance';
import HRLeave from './components/HrDashboard/components/Leave/HRLeave';
import ApplyLeave from './components/HrDashboard/components/Leave/ApplyLeave';
import Index from './components/HrDashboard/components/Index';
import HRDBLeave from './components/HrDashboard/HR/HRDBLeave';
import HRDBApplyLeave from './components/HrDashboard/HR/HRDBApplyLeave';
import HRDBEmployee from './components/HrDashboard/HR/HREmployee';
import HREmployee from './components/HrDashboard/components/Employee/Employee';
import Payroll from './components/HrDashboard/components/PayRoll/Payroll';
import HRDbPayRoll from './components/HrDashboard/HR/HRDbPayRoll';
import HRDBAddEmployee from './components/HrDashboard/HR/HRDBAddEmploye';
import Addemployee from './components/HrDashboard/components/Employee/Addemployee';

function App() {
  return (
   
    
   
    
    <div className='App-main'>
    <BrowserRouter>
      <div className='main-components'>
        <Routes>
          <Route path="/" element={<HRDashBoard/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/forgotpwd' element={<ForgotP/>}></Route>
          <Route path='/otp' element={<OTP/>} ></Route>
          <Route path='/changep' element={<ChangeP/>} ></Route>
          <Route path='/contactus' element={<ContactUs/>} ></Route>
          <Route path="/hrdashboard" element={<HRDashBoard/>} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/hrleave" element={<HRLeave/>} />
          <Route path="/applyleave" element={<ApplyLeave/>} />
          <Route path="/hrdbleave" element={<HRDBLeave/>}></Route>
          <Route path="/hrdbapplyleave" element={<HRDBApplyLeave/>}></Route>
          <Route path="hremployee" element={<HREmployee/>}></Route>
          <Route path="hrdbemployee" element={<HRDBEmployee/>}></Route>
          <Route path="/hrpayroll" element={<Payroll/>}></Route>
          <Route path="/hrdbpayroll" element={<HRDbPayRoll/>}></Route>
          <Route path="/addemployee" element={<Addemployee/>}></Route>
          <Route path="/hrdbaddemployee" element={<HRDBAddEmployee/>}></Route>

          
          
          
        </Routes>
    </div>
    </BrowserRouter>
    </div>   
    
  
  );
}

export default App;

