import React, { Component } from "react";
import API from "../utils/API";
import fire from "../config/Fire";



// this.handleSave = this.handleSave.bind(this);

class Signup extends Component {
    state = {
        email: "",
        password: ""
    };
    // componentDidMount() {

    // }

    handleInputChange = e => {
        console.log(this.state.email);
        this.setState({ [e.target.name]: e.target.value });

    };


    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => { console.log(u); })
            .catch((error) => { console.log(error); });
    }

    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmit = event => {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u.user.email);
            API.createUser({
                uid: u.user.uid,
                email: u.user.email
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


    render() {
        return (
            <form>
                <p>Username: {this.state.email}</p>
                <p>Password: {this.state.password}</p>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleFormSubmit}>Signup</button>
                <button onClick={this.login}>Login</button>
            </form>

        );
    }
}

export default Signup;

