import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attendance from './Attendance/HRAttendance';
import HRsideBar from './HRSideBar/HRsideBar';
import HRLeave from './Leave/HRLeave';
import ApplyLeave from './Leave/ApplyLeave';


function Index() {
  return (
    <>
    <div>index</div>
    <h1>hello</h1>
    <BrowserRouter>
    <Routes>
    <Route path="/attendance" element={<Attendance/>} />
    <Route path="/hrleave" element={<HRLeave/>} />
    <Route path="/applyleave" element={<ApplyLeave/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index;

