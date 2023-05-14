import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
export default function Login() {
  let history = useHistory();

  const [Crud, setCrud] = useState({
    
    email: "",
    pass: "",
  });

  const {  email,pass } = Crud;

  const onInputChange = (e) => {
    setCrud({ ...Crud, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try{await axios.post(`http://localhost:8081/loginuser`,Crud);
    if (Crud.email === "shekharabhinas@gmail.com") {
    
    //   // history.push("/dashboard")
    history.push("/dashboard");
    
    }
    else  {
      history.push("/employeedash");
    }

  }
    catch{
      let a = document.getElementById("er");
      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color="red";
      a.style.fontWeight=700;
      
    }
  };

  return (
    <>
       
       <div className="log_in">
    <div className="container">
     
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h1 className="text-center m-4">Login</h1>

          <form className="type" onSubmit={(e) => onSubmit(e)}>
           
           
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e) }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Pass" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your passsword"
                name="pass"
                value={pass}
                onChange={(e) => onInputChange(e) }
              />
            </div>
            <div>
          <button type="submit" className="btn btn-success">Submit</button>
         <Link className="btn btn-info mx-2" to="/">
              Cancel
            </Link></div>
            </form>
        </div>
      </div>
      </div>
      </div>
      </>
  );
}
