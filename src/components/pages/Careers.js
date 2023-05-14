import React from 'react'
import { Link } from 'react-router-dom'
// import style from ".\components\pages\style"
import './Style.css';
export default function Careers(){
  
   return (
    
	
    <div className="mainx">
    <div className="headc"> <h1>JOB 1</h1></div>
    <div className="main11">
    <div className="main121">
    <p>
    
    Human resources management (HRM) is a strategic approach to maximizing employee performance and employee experience by focusing on effective staffing, onboarding, deploying, and overseeing of the workers within an organization.
    </p>
    
    <p>CTC - 12 LPA</p>
    <p>Work Experience - 2 years</p>
      </div>
      <Link to="/reg">
    <button className="primary-button" > APPLY</button>
    </Link>
            </div>
            </div>
    )
};