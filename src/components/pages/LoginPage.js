import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
//import ReactDOM from "react-dom";
import '../../App.css'
//import Dashboard from '../Admin/Dashboard';
// import LandingPage from './LandingPage'

export default function SignInPage() {
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history=useHistory();

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "employee",
      password: "employee"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password === "admin" && userData.username==="admin") {
        // Invalid password
        history.push("/dashboard")
        // setErrorMessages({ name: "pass", message: errors.pass });
      } else  if (userData.password === "employee" && userData.username==="employee"){
        history.push("/employeedash")
        // setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    let redirect=()=>{
      history.replace("/dashboard")
    }
      
    
    const renderForm= (
        <div className="text-center m-5-auto">
           <br/><br/><br/><br/><br/><br/> <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit} >
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="uname" required  />
                    {renderErrorMessage("uname")}
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="pass" required/>
                    {renderErrorMessage("pass")}
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
    return (
        <div className="app">
          <div className="login-form">
            {isSubmitted ?  redirect() : renderForm}
          </div>
        </div>
      );
}
