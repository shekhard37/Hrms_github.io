import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/users/Login';
//import Register from './components/users/Register';
//import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Contact from './components/pages/Contact'
import Careers from './components/pages/Careers'
import Dashboard from './components/Admin/Dashboard'
import Payroll from './components/Admin/Payroll'
import Reg from './components/Applicant/Register'
import EditCustomer from './components/Admin/Leave/EditCustomer'
import LeaveReport from './components/Admin/LeaveReport'
import Jobmanuplate from './components/Admin/Job_manuplation/Jobmanuplate'
import Complain from './components/Employee/Viewprofile/profile'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
//Employee
import Employeedash from "./components/Employee/DashBoard/Employeedash";
import Page404 from "./components/Employee/Page404/Page404";
import Viewprofile from "./components/ListEmployeeComponent";
import Viewsalary from "./components/Employee/Viewsalary/salary";
import Complaint from "./components/Employee/Complaint/AddUser";
import Applayleave from "./components/Employee/Applyleave/AddUser";
import Viewattendence from "./components/Employee/Viewattendence/View/View";
import Search from "./components/Employee/Viewattendence/attendance";

export default function App() {
    return (
        <Router>
            {/* <Navbar/> */}
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                     <Route path="/login" component={ LoginPage } />
                    {/* <Route path="/register" component={Register} /> */}
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/career" component={Careers}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/editcustomer" component={EditCustomer}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path = "/index1" exact component = {ListEmployeeComponent}/>
                    <Route path = "/employees" component = {ListEmployeeComponent}/>
                    <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
                    <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
                    <Route path = "/payroll" component = {Payroll}/>
                    <Route path = "/jobmanuplate" component = {Jobmanuplate}/>
                    <Route path = "/complain" component = {Complain}/>
                    <Route path = "/leavereport" component = {LeaveReport}/>
                    <Route path="/view"  component={Viewsalary} />
                    <Route  path="/employeedash" component={Employeedash} />
          <Route path="/view1"  component={Viewattendence} />
          <Route path="/view2"  component={Viewprofile} />
          <Route path="/Complaints"  component={Complaint} />
          <Route path="/Apply"  component={Applayleave} />
          <Route path="/search"  component={Search} />
          
          <Route path="*" component={Page404} />
                </Switch>
            </div>
        </Router>
    )
}

