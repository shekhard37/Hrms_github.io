import React from "react";
import "./App.css";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
const _ = require("lodash");


class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
      board: [],
      boardItem: "",
      toggle: false,
      submit: true,
      logout: false,
      loggedInUserObj: {},
    };
  }

  onLogoutYes = () => {
    this.setState({ submit: false });
    this.setState({ toggle: true });
    const userObj = JSON.parse(
      localStorage.getItem(_.get(this.state.loggedInUserObj, "userName", ""))
    );
    userObj.isUserLoggedIn = false;
    localStorage.setItem(
      _.get(this.state.loggedInUserObj, "userName", ""),
      JSON.stringify(userObj)
    );
  };

  onLogout = () => {
    this.setState({
      logout: !this.state.logout,
    });
  };

  componentDidMount() {
    const loggedInUserName = _.get(this.props.location, "state.userName", {});
    this.setState({
      loggedInUserObj: JSON.parse(localStorage.getItem(loggedInUserName)),
    });
  }

  render() {
    const localUname = `${_.get(
      this.state.loggedInUserObj,
      "firstName",
      ""
    )} ${_.get(this.state.loggedInUserObj, "lastName", "")}`;

    const myStyle = {
      backgroundImage:
        "url('https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=826&t=st=1668156637~exp=1668157237~hmac=17e71b1ce3557d5534ebd74f7ece5e8a7dcb298b72ff376680e426fd604ef1f5')",
      height: '90vh',
      marginTop: '-1px',
      fontSize: '25px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div style={myStyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
          <div className="container">
            <img src="./logo2.png" alt="" className="border p-1" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">

                <li
                  className="nav-item active">
                  <button
                    type="button"
                    
                    className="mr-sm-2 btn-sm">
                    <Link to={"/view"}>view salary</Link>
                  </button>
                </li>
                <br></br>
                <li
                  className="nav-item active "

                >
                  <button
                    type="button"
                    className="btn btn-outline-success mr-sm-2 btn-sm"

                  >
                    <Link to={"/Complaints"}>Complaints</Link>
                  </button>
                </li>

                <li
                  className="nav-item active "
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-sm-2 btn-sm"

                  >
                    <Link to={"/view1"}>View attendance</Link>
                  </button>
                </li>
                <li
                  className="nav-item active "

                >
                  <button
                    type="button"
                    className="btn btn-outline-warning mr-sm-2 btn-sm"

                  >
                    <Link to={"/Apply"}>Apply leave</Link>
                  </button>
                </li>
                <li
                  className="nav-item active "

                >
                  <button
                    type="button"
                    className="btn btn-outline-info mr-sm-2 btn-sm"

                  >
                    <Link to={"/view2"}>View profile & update</Link>
                  </button>
                </li>
              
                <li
                  className="nav-item active"
                  onClick={this.onLogout}
                >
                  <button
                    type="button"
                    className="btn btn-outline-danger mr-sm-2 btn-sm"
                    onClick={this.onLogout}
                  >
                    LOGOUT
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <h2 className="text">Welcome_{localUname}</h2>

        </div>
        {!this.state.submit ? <Redirect to={`/`} /> : null}
        {this.state.logout ? (
          <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={this.onLogoutYes}
            onCancel={this.onLogout}
            focusCancelBtn
          ></SweetAlert>
        ) : (
          ""
        )}


      </div>

    );
  }
}

export default DashBoard;
