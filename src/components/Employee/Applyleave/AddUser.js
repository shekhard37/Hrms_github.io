import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function AddUser() {
  let history = useHistory();

  const [user, setUser] = useState({
    session_year: "",
    semester: "",
    subject_name: "",
    faculty_name: "",
  });

  const { session_year, semester, subject_name, faculty_name } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/user", user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">LeaveApplication Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="session_year"  className="fw-bold"><h3>Leave_Type :</h3> </label>
              <select type={"text"} name="session_year" value={session_year} onChange={(e) => onInputChange(e)}>
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Privilege Leave">Privilege Leave</option>
              </select>
              {/* <input
                type={"text"}  className="form-control"  placeholder="Enter Your Name" name="session_year"  value={session_year}  onChange={(e) => onInputChange(e)} /> */}
            </div>
            <div className="mb-3">
              <label htmlFor="semester"  className="fw-bold"><h3>From_Date:</h3></label>
              <input type={"date"} className="form-control" placeholder="Write Your complaint" name="semester" value={semester} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="subject_name"  className="fw-bold"> <h1>To_Date:</h1> </label>
              <input
                type={"date"}
                className="form-control"
                name="subject_name"
                value={subject_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="faculty_name"  className="fw-bold"> <h3> Reason_for_leave:</h3></label>
              <input
                type={"text"}
                className="form-control"
                placeholder=""
                name="faculty_name"
                value={faculty_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="semester"  className="fw-bold"><h3>Leave_Status:</h3></label>
              <select type={"text"} name="session_year" value={session_year} onChange={(e) => onInputChange(e)}>
                <option value="" disabled selected>
                  Pending
                  </option>
                  </select>
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button> <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
