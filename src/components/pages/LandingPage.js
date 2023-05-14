import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
// import BackgroundImage from '../../assets/images/bg.png'
import videoBg from '../../assets/images/cutm.m4v'

export default function LandingPage() {
    return (
        <>
         <nav className ="navbar navbar-expand-lg navbar-success fixed-top mask-custom shadow-0">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">HRMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" id="nav1">
       <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
       <Link to="/register" className="nav-link active" aria-current="page" >Register</Link>
       <Link to="/career" className="nav-link active" aria-current="page">Jobs</Link>
       <Link to="/contact" className="nav-link active"aria-current="page" >Contact Us</Link>
      </div>
    </div>
  </div>
</nav>
        <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1 style={{color: "aqua"}}>Welcome To</h1>
            <h2 style={{color: "aqua"}}>Human Resourse Management System</h2>
        </div>
    </div>
        </>
    )
}

// const HeaderStyle = {
//     width: "100%",
//     height: "100vh",
//     background: `url(${BackgroundImage})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// }