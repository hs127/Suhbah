import React from "react";
import "./style.css";


//sign up Modal 

function Loginform(props) {

  return (
    <div className="SignupForm">
      <h1>Login Form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <br></br>
        <input className="forminfo"
          type="text"
          name="email"
          value={props.email}
          onChange={props.handleInputChange}
        />
        <br></br>
        <label htmlFor="password"> Password: <br></br> </label>
        <br></br>
        <input className="forminfo"
          type="password"
          name="password"
          value={props.password}
          onChange={props.handleInputChange}
        />
        <br></br>
        <br></br>
        <button onClick={props.login}>Login</button>
        <br></br> <br></br>
        <p>Don't have an account</p>

        <button name="userStatus" value={props.userStatus} onClick={props.handleStatus}>Create an Account</button>
      </form>
    </div >

  );
}

export default Loginform;
