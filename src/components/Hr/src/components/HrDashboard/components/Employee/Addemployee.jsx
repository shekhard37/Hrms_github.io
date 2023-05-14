import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Addemp.css";

function Addemployee() {
  return (
    <div className="add-main">
        <div className='add-main11'>
                      <h1>Add Employee</h1>
            <p>You can apply your leave</p>
     <div className='add-details'>       
        <div className="add-main2">
            {/* <div className="fp-img">
                <img src={lock} className="fp-lock" alt="lock" />
                </div> */}


            <div className="add-inputs">
            <input type="text" placeholder="Firstname" required></input> 
                <select>
                    <option>Job Role</option>
                    <option>Job 1</option>
                    <option>Job 2</option>
                    <option>Job 3</option>
                    <option>Job 4</option>
                    <option>Job 5</option>
                    <option>Job 6</option>
                    <option>Job 7</option>
                    <option>Job 8</option>
                    <option>Job 9</option>
                    <option>Job 10</option>
                </select>
              
                
                <input type="text" placeholder="Salary" required></input> 
                <input type="text" placeholder="Phone" required></input> 


            </div>
             
        </div>

        <div className="add-main2">
            {/* <div className="fp-img">
                <img src={lock} className="fp-lock" alt="lock" />
                </div> */}


            <div className="add-inputs">
                <input type="text" placeholder="Lastname" required></input>
                <input type="date" placeholder="DOB" required></input> 
                
                <select>
                    <option>Experience</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>10</option>
                </select>

                <input type="text" placeholder="Email" required></input> 

            </div>
            </div>
             
        </div>
        <br></br>
        <div className='add-buttons'>
        <NavLink to="/hrdbemployee"><button >Add</button></NavLink>
        <NavLink to="/hrdbemployee"><button id="add-b2">Cancel</button></NavLink>
        </div>
        </div>
            
        </div>
  )
}

export default Addemployee;