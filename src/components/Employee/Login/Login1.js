import React, {useState} from 'react'
//import Registration from './Registration';
import {Link, Navigate} from 'react-router-dom';
//import email from "./images/email.png";
//import lock from "./images/lock.png";
import profil from "./images/profile.png";
//import '../components/Login.css'
//import {useNavigate} from "react-router-dom";

function Login() {
   // const navi=useNavigate()

async function damn(){

let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;
let d=await fetch(`http://localhost:8081/login?user=`+user+`&pass=`+pass);

let data= await d.text();


if(data=="1"){navi("/dashboard");}
}



    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    return (
        <div className='main'>
        
        <form >
            <div className='login'>
                <div className='sub-main'>
                    <div>
                       
                            <div className='container-image'>
                            <img src={profil} alt='profile' className='profile'/> 
                            </div>
                        
                        <div>
                            <h1>Login</h1>
                            <div className='user'>
                            <div>
                                <label>Username:</label> &nbsp; 
                                <input type="email" placeholder='Email-id' className='fill' id="user"/>
                            </div>
                            <div className='second-input'>
                            <label>Password:</label> &nbsp;
                                <input type="password" placeholder='Password' className='fill' id="pass"/>
                            </div>
                            </div>

                            <div className='forget'>
                            
                            <Link to='/forgetp'>
                            <a href='#' >Forgot Password ?</a> 
                                </Link>   
                                </div>
{/*                             
                            <div className='login-btn'>
                                
                                <Link to='/home'>
                                <a href='#'>Login</a>
                                </Link>
                            </div> */}
<button onClick={damn}>click</button>
                            <div className='links'>
                                  <h4>Don't have an Account ? </h4>
                                  
                                </div>
                                <div className='reg'>
                                    <Link to='/registration'>
                                <a href='#' >Register</a></Link>
                                </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}

export default Login