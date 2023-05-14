import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees Profile</h2>
                
                 <br></br>

                            
                           <center><tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        // <tr key = {employee.id}>
                                        //      <td> { employee.firstName} </td>   
                                        //      <td> {employee.lastName}</td>
                                        //      <td> {employee.emailId}</td>
                                        //      <td> {employee.Password}</td>
     <div className="form">
    <div className="form-body">
        <div className="username">
            <label className="form__label" for="firstName">First Name </label>
            <input className="form__input" type="text" id="firstName" placeholder="First Name" value ={ employee.firstName} />
        </div>
        <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" value = {employee.lastName}/>
        </div>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email" value={employee.emailId}/>
        </div>
        {/* <div className="password">
            <label className="form__label" for="password">Mobile _no</label>
            <input className="form__input" type="mobile"  id="password" placeholder="mobile_no"/>
        </div>
        <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Address</label>
            <input className="form__input" type="text" id="confirmPassword" placeholder="Address"/>
        </div> */}
    </div>
    <div class="footer">
        <button onClick={ () => this.editEmployee(employee.id)}type="submit" class="btn">Update</button>
        <button onClick={ () => this.viewEmployee(employee.id)}type="reset" class="btn">View</button>
    </div>
</div> 
                                
                                               
                                        
                    
                                    )
                                }
                            </tbody></center> 
                       

            </div>
        )
    }
}

export default ListEmployeeComponent
