import React from "react";


//sign up Modal 

function Signupform(props) {

    return (
        <div className="SignupForm">
            <h1>Signup form</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <h2>{props.email}</h2>

                <input className="forminfo"
                    type="text"
                    name="email"
                    value={props.email}
                    onChange={props.handleInputChange}
                />
                <label htmlFor="password">Password: </label>

                <input className="forminfo"
                    type="password"
                    name="password"
                    value={props.password}
                    onChange={props.handleInputChange}
                />

                <button onClick={props.handleFormSubmit}>Sign up</button>
            </form>
        </div >

    );
}

export default Signupform;