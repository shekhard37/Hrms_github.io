import React from 'react'
import {Link} from 'react-router-dom'
import './Dashboard.css'
function Dashboard() {
  return (
    <div>
 <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>My App</header>
    <ul>
     <li><Link to="/view"><i class="fas fa-qrcode"></i>view salary</Link></li>
     <li><Link to="/Complaints"><i class="fas fa-link"></i>Complaints</Link></li>
     <li><Link to="/view1"><i class="fas fa-link"></i>View attendance</Link></li>
     <li><Link to="/Apply"><i class="fas fa-link"></i>Apply leave</Link></li>
     <li><Link to="/view2"><i class="fas fa-link"></i>View profile</Link></li>
     <li><Link to="/login"><i class="bi bi-box-arrow-right"></i>Logout</Link></li>
      </ul>
   </div>
</div>
  )
}

export default Dashboard