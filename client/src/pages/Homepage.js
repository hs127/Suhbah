import React, { Component } from "react";
import API from "../utils/API";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Profile from "./pages/Profile";
import Signup from "./Signup";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Profile from "./Profile";
import fire from "../config/Fire";


class Homepage extends Component {

    //maybee have loggein indicator in DB - update the flag to false 
    logout(uid) {
        // console.log(this.props.dataFromParent);
        console.log("logout function");
        console.log(uid)
        fire.auth().signOut();
        //need to un hardcode 
        API.updateLogIn(uid)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.props.dataFromParent.uid);
        return (
            <div>

                <button onClick={() => this.logout(this.props.dataFromParent.uid)} >SignOut</button>
            </div>
            // <Router>
            //     <div>

            //         <Header />
            //         <Navbar />
            //         <button onClick={this.logout}>SignOut</button>
            //         <Wrapper>


            //             <Route exact path="/profile" component={Profile} />

            //         </Wrapper>

            //     </div>
            // </Router>

        );
    }
}



export default Homepage;

