import React from "react";

import logo from './logo1112.png';
import logo2 from './logofront.png';
import './App.css';

class Login extends React.Component{

    state={
        email:'',
        pwd:''
    }
handleChange = (e) =>
    {
        
    }

    handleSubmit = (e) =>
    {
        
    }

    render(){
        return(
       <div>
		<div class="headd2"><h1>HRMS</h1></div>
	
	<div class="headd222">
	
	<div class="headd21">
	
	</div>
	
	
	</div>
	
	
	</div>
	
	<div class="mainx">
		<div class="main1">
			<div class="main2">
			 <i class="fas fa-user-circle" style="font-size:250px; color:#357EC7;"></i> 
			</div>
			
			<div class="main3">
				<div class="main33">
				
					<div class="headd"> 
						<h1 > Employee Login </h1>
					</div>
					<div class="in2">
						<div class="inx">
							<div class="sym">
								<i class="fas fa-user" style="color: #666666;"></i>
							</div>
							<input type="text" name="uid" placeholder="Username" class="inn">
						</div>
	
	
						<div class="inx">
							<div class="sym"><i class='fas fa-lock' style="color: #666666;"></i></div>
							<input type="password" name="pwd" placeholder="Password" class="inn">
						</div>
					</div>
				
	

					<div class="button">	
					<
						<button name="action" value="LOGIN" class="buttons" style=" font-family:  Gill Sans, sans-serif; " onclick="validate()">LOGIN</button>
					</div>
                    
					<p style=" color:#666666;font-size:15px; font-family: Trebuchet MS, sans-serif;">Forgot <a href="" style="text-decoration:none" class="a1">Username / Password?</a></p>
			<!-- 	</form> -->
				</div>
				
			</div>
			
		</div>
	</div>
      
         ) }
    }


export default Login;



