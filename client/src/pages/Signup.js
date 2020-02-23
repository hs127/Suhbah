import React, { Component } from "react";
import API from "../utils/API";
import fire from "../config/Fire";
import Signupform from "../components/Signup";
import Loginform from "../components/Loginform";

class Signup extends Component {
    state = {
        email: "",
        password: "",
        userStatus: true
    };
    // componentDidMount() {

    // }

    handleInputChange = e => {
        // console.log(this.state.email);
        this.setState({ [e.target.name]: e.target.value });

    };

    //for login button
    //Need the API.updateLogin function so that loggedIn column can change to true 
    login = e => {
        e.preventDefault();
        // console.log(data);
        console.log("login function");
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => { API.updateLogIntwo(u.user.uid).then(data => console.log(data)).catch(err => console.log(err)); })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    alert("auth/wrong-password")
                }
                else {
                    alert(error.message);
                }

            });

    }

    // When the form is submitted, prevent the default event and alert the username and password

    handleStatus = event => {
        event.preventDefault();
        console.log("handle Status clicked");
        console.log(event.target.name);
        this.setState({ [event.target.name]: false });

    };
    //for signup button
    handleFormSubmit = event => {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u.user.email);
            API.createUser({
                uid: u.user.uid,
                email: u.user.email,
                loggedIn: true
            }).then(data => console.log(data))


        }).catch((error) => {
            //need to specify error when user tried to create an account that already exists 
            //show different modals according to error messages 
            if (error.code === 'auth/email-already-in-use') {
                alert('email-already-in-use.');
            }
            else {
                alert(error.message);
            }
            console.log(error);
        });

    };
    //I want the signup form to render when the user selects the sign up button 
    ///I want the login form to render when the user selects the login button 

    render() {
        // console.log(this.props.dataFromParentt);
        return (
            <div>

                {this.state.userStatus === true ?
                    (<Loginform
                        handleInputChange={this.handleInputChange}
                        login={this.login}
                        handleStatus={this.handleStatus}
                    />)
                    : (<Signupform
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />)}
            </div>


            // <form>
            //     <p>Username: {this.state.email}</p>
            //     <p>Password: {this.state.password}</p>
            //     <input
            //         type="text"
            //         placeholder="email"
            //         name="email"
            //         value={this.state.email}
            //         onChange={this.handleInputChange}
            //     />
            //     <input
            //         type="password"
            //         placeholder="Password"
            //         name="password"
            //         value={this.state.password}
            //         onChange={this.handleInputChange}
            //     />
            //     <button onClick={this.handleFormSubmit}>Signup</button>
            //     <button onClick={this.login}>Login</button>
            // </form>

        );
    }
}

export default Signup;

