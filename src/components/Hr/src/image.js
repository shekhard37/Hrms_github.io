import React from "react";

import logo from './logo1112.png';
import logo2 from './logofrontc.svg';
import './App.css';

class Image extends React.Component{
    render(){
        return(
            <div className="parent">
                <img src={logo} className="App-logo" alt="logo" />
                <img src = {logo2} id="x" className="App-logo2" alt="logo" /> 
           </div>
      
         ) }
    }
    
export default Image;