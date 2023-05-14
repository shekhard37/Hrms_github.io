import React from 'react'
import {Link} from 'react-router-dom'
import './Dashboard.css'
import background from '../../assets/images/gate.jpeg'
function Dashboard() {
  const myStyle={
    backgroundImage: 
"url('https://919687.smushcdn.com/2316719/wp-content/uploads/2022/03/bg_06-768x384.jpg?lossy=1&strip=1&webp=1')",
height:'100vh',
        marginTop:'-0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
};
  return (
    <>
   
    <div style={myStyle }>
    {/* <h1 className='position-absolute start-50 translate-middle'>Admin Dashboard</h1> */}
 <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>My App</header>
    <ul>
     <li><Link to="/index1"><i class="fas fa-qrcode"></i>Employee Crud</Link></li>
     <li><Link to="/editcustomer"><i class="fas fa-link"></i>Leave </Link></li>
     <li><Link to="/payroll" ><i class="fas fa-stream"></i>Payroll</Link></li>
     <li><Link to="/jobmanuplate"><i class="fas fa-calendar-week"></i>Manage Job</Link></li>
     <li><Link to="/leavereport"><i class="far fa-question-circle"></i>Leave Report</Link></li>
     <li><Link to="/complain"><i class="fas fa-sliders-h"></i>Fix Complaints</Link></li>
     <li><Link to="/login"><i class="bi bi-box-arrow-right"></i>Logout</Link></li>
    </ul>
   </div>
</div>
</>
  )
}

export default Dashboard