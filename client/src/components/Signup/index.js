import React from "react";
import "./style.css";


//sign up Modal 
{/* <button onClick={props.login}>Login</button>
<button name="userStatus" value={props.userStatus} onClick={props.handleStatus}>Create an Account</button> */}

function Signupform(props) {
    const { formErrors } = props;
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="formh1">Create Account</h1>
                <form onSubmit={props.handleFormSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className={formErrors.firstName.length > 0 ? "error" : null}
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                            onChange={props.handleInputChange}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{props.formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className={formErrors.lastName.length > 0 ? "error" : null}
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                            onChange={props.handleInputChange}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{props.formErrors.lastName}</span>
                        )}
                    </div>
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
                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                        <button name="userStatus" value={props.userStatus} onClick={props.handleStatus}>Already Have an Account?</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signupform;