import React from 'react'
import { Link } from "react-router-dom";
import './view.css'
export default function View() {
  return (
    <body class="cd">
    <h1>Search Attendence</h1>
  <div class="select">

  <h1> Attendence </h1>

<input type="month" id="select" name="bdaymonth"/>
<br></br><br></br>
<button type="button" class="btn btn-outline-primary"><Link to={"/search"}>Search</Link></button>
</div>
</body>
    
  )
}
