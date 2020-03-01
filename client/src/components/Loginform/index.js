import React from "react";
import "./style.css";


//sign up Modal 

function Loginform(props) {
  const { formErrors } = props;
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="formh1">Login</h1>
        <form onSubmit={props.handleFormSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={props.handleInputChange}
            />
            {props.formErrors.email.length > 0 && (
              <span className="errorMessage">{props.formErrors.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={props.handleInputChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{props.formErrors.password}</span>
            )}
          </div>
          <div className="login">
            <button id="loginbutton" type="submit" onClick={props.login}>Login</button>
            <button name="userStatus" value={props.userStatus} onClick={props.handleStatus}>Create an Account</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Loginform;
