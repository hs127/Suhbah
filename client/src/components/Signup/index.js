import React from "react";


//sign up Modal 

function Signup(props) {

    return (
        <div className="SignupForm">
            <h1>Signup form</h1>
            <form>
                <label htmlFor="username">Username: </label>
                <h2>{props.username}</h2>
                <input
                    type="text"
                    name="username"
                    value={props.username}
                    onChange={props.handleInputChange}
                />
                <label htmlFor="password">Password: </label>

                <input
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

export default Signup;