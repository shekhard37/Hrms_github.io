import React, { useState } from "react"; 
function Payroll() {
 
    const [salary, setSalary] = useState();
    var [tax, setTax] = useState();
    var [nsal, setNsal] = useState();
    const [leave, setLeave] = useState();
 
  
function Calculation()
{
  
      if(salary > 50000)
       {
         tax = salary * 10/100;
       }
       else if(salary > 30000)
       {
         tax = salary * 5/100;
       }
       else
       {
        tax = 0;
       }
 
       setTax(tax);  
      
      let oneday=salary/30;
       nsal = salary - tax-(oneday * leave);
       let final=nsal.toFixed();
 
 
    setNsal(final);  
 
}
 
 
    return (
        <>
      <div class="container">
        <h3>Payroll Management System</h3>
 
    <div class="form-group">
    <label>Employee Name</label>
    <input type="text" class="form-control" placeholder="Employee Name" />
    </div>
 
    <div class="form-group">
    <label>Salary</label>
    <input type="text" class="form-control" placeholder="Enter Salary"
    onChange={(event) =>
        {
            setSalary(event.target.value);      
        }}
    />
    </div>
    <div class="form-group">
    <label>Leave days</label>
    <input type="text" class="form-control" placeholder=""Leave Days
    onChange={(event) =>
        {
            setLeave(event.target.value);      
        }}
    />
    </div>
 
    <div class="form-group">
    <label>Tax</label>
    <input type="text" class="form-control" placeholder="Tax" value={ tax }  />
    </div>
 
 
    <div class="form-group">
    <label>Net Salary</label>
    <input type="text" class="form-control" placeholder="Net Salary" value={nsal} />
    </div>
  <button type="submit" onClick={Calculation}  class="btn btn-primary mt-4">Submit</button>
 
 
        
      </div>
      </>
    );
  }
  
  export default Payroll;