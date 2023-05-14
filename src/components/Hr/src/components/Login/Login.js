import React,{useState,useEffect} from "react";

import { Form } from "react-bootstrap";
// import ToastContainer from "react-bootstrap";
// import { Toast } from "react-bootstrap";

import {ToastContainer,toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
 

//toast.configure()


import logo from './logo1112.png';
import logo2 from './logofront.png';
import Nav from "../navbar/navbar";
import Facebook from"./Facebook.png";

import './Login.css';
import '../navbar/navbar.css';
import { Link } from "react-router-dom";
import { Tooltip } from "bootstrap";

// toast.configure()

const Login = () =>{

    const [login,setLogin]= useState()

const notify = () => {
    toast.success("Login success!");
}

    const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }

    const inValues = {username:"",password:""};
    const [formValues, setFormValues] = useState(inValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({ ...formValues,[name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));   
        setIsSubmit(true);
    }

    // useEffect(()={
    //     if(Object.keys(formErrors).length === 0 && isSubmit){
    //         console.log(formValues);
    //     }

    // },[formErrors])

    const validate = (values) =>{
        const errors = {};
        if(!values.username){
            // errors.username="username is required";
            toast.error("Username is required",{
            position: toast.POSITION.BOTTOM_RIGHT});
        }
        if(!values.password){
            //errors.password="password is required";
            toast.error("Password is required",{
                position: toast.POSITION.BOTTOM_RIGHT});
        }
        
        return errors;
    }



        return(
            
           <div className="Lo-main">
             <div className="nav-main1"><Nav/></div> 
            
                <div className="login-main">
             
                <div className="Lmain">
            
                <div className="parent">
                <img src={logo} className="App-logo" alt="logo" />
                <img src = {logo2} id="x" className="App-logo2" alt="logo" /> 
                </div>
                {/* onSubmit={handleSubmit} */}
                <form onSubmit={handleSubmit}>
                <div className="Login">
                
                <div >
                <h1>HRMS</h1>
                </div>
                <div className="L_details">
                <input placeholder="Username"  value={formValues.username} onChange={handleChange}/>
                {/* <p className="errmsg">{formErrors.username}</p> */}
                
                <input type="password" placeholder="Password" value={formValues.password} onChange={handleChange}/>
                {/* <p className="errmsg">{formErrors.password}</p> */}
                {/* <Link to="/hrdashboard"> */}
                    <button type="submit">Sign in</button>
                    <ToastContainer className="too"/>
                    {/* </Link> */}
                 
                <div className="fp">
                <input class="checkbox-flip" type="checkbox" id="check1"/>
                <label for="check1"><span></span>Remember Me</label>
                    <Link to="/forgotpwd">Forgot Password?</Link>
                </div>
               
                </div>

        
                </div>
                </form>
                </div>
        
                </div>
        
             </div>
         ) 
    }


export default Login;