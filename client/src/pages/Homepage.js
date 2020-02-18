import React, { Component } from "react";
import API from "../utils/API";
import fire from "../config/Fire";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";


class Homepage extends Component {

    //maybee have loggein indicator in DB - update the flag to false 
    logout() {
        fire.auth().signOut();
    }

    render() {

        return (
            <div>
                Homepage

                <button onClick={this.logout}>SignOut</button>
            </div >

        );
    }
}

export default Homepage;

