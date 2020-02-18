import React from "react";


//sign up Modal 

function Loginform(props) {

  return (
    <div className="SignupForm">
      <h1>Login form</h1>
      <form>
        <label htmlFor="email">Email: </label>
        <h2>{props.email}</h2>

        <input
          type="text"
          name="email"
          value={props.email}
          onChange={props.handleInputChange}
        />
        <label htmlFor="password">Password: </label>

        <input
          type="password"
          name="password"
          value={props.password}
          onChange={props.handleInputChange}
        />

        <button onClick={props.login}>Login</button>
        <button name="userStatus" value={props.userStatus} onClick={props.handleStatus}>Create an Account</button>
      </form>
    </div >

  );
}

export default Loginform;
