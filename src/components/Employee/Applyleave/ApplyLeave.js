import React, { Component } from "react";
import "./LeaveApplicationEmpForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
//import axios from "axios";

class LeaveApplicationEmpForm extends Component {
  state = {
  };
  componentWillMount()  {
     
  }
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://i.pinimg.com/originals/c1/31/c4/c131c4673084aae6e3b98ee77f5f265c.gif')",
      height: '80vh',
      marginTop: '-1px',
      fontSize: '25px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div >
        <div className="text-center _01">
        <h4 id="role-form-title">LeaveApplication Details</h4></div>
 <div  className="new">
  <Form className="ab" onSubmit={this.props.onLeaveApplicationEmpSubmit}>
  <Form.Group as={Col} >
    <Form.Label column sm={0}>
    Leave_Type
    </Form.Label>
    <Col sm={10} className="center">
    <Form.Control as="select"  required>
    <option value="" disabled selected>
                    Select your option
                  </option>
    <option value="Sick Leave">Sick Leave</option>
    <option value="Casual Leave">Casual Leave</option>
    <option value="Privilege Leave">Privilege Leave</option>
          </Form.Control>
    </Col>
    </Form.Group>
  <Form.Group as={Col}>
    <Form.Label column sm={2}>
    From_Date
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Col}>
    <Form.Label column sm={0}>
    To_Date
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" placeholder="ToDate" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Col}>
    <Form.Label column sm={2}>
    Reason_for_leave
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Reason for leave" required/>
    </Col>
  </Form.Group>
   
  <Form.Group as={Col} >
    <Form.Label column sm={2}>
    Leave_Status
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option  value="1" selected>Pending</option>
          </Form.Control>
    </Col>
    </Form.Group>
  <Form.Group as={Col} id="form-submit-button" className=" mr-sm-2 " >
    <Col  sm={{ span: 10, offset: 2 }}  >
      <Button className="btn btn-primary  mr-sm-2 " type="submit">Submit</Button>
      <Button className="btn btn-primary   mr-sm-2" type="reset" onClick={this.props.onFormClose}>cancel</Button>
    </Col>
  </Form.Group>
</Form>
      </div>
      </div>
    );
  }
}

export default LeaveApplicationEmpForm;