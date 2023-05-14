import React from 'react'
import {Link} from 'react-router-dom'
import '../Viewprofile/style.css'
const profile = () => {
  return (
    <div className="form">
    <div className="form-body">
        <div className="username">
            <label className="form__label" for="firstName">First Name </label>
            <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
        </div>
        <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
        </div>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Mobile _no</label>
            <input className="form__input" type="mobile"  id="password" placeholder="mobile_no"/>
        </div>
        <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Address</label>
            <input className="form__input" type="text" id="confirmPassword" placeholder="Address"/>
        </div>
    </div>
    <div class="footer">
        <button type="submit" class="btn"><Link to="/view2">Update</Link></button>
        <button type="reset" class="btn">Clear</button>
    </div>
</div> 
  )
}

export default profile