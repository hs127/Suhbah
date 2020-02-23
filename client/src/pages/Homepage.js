import React, { Component } from "react";
import API from "../utils/API";
// import Profile from "./pages/Profile";
import Navbar from "../components/Navbar";
// import Wrapper from "../components/Wrapper";
import Profile from "../components/Profile";
import Match from "../components/Match";
import Housing from "../components/HousingForm";
import fire from "../config/Fire";


class Homepage extends Component {

    // state = {
    //     form: {
    //         username: "";
    //     }
    // }

    state = {
        currentPage: "Match",
        username: "",
        age: 0,
        gender: "",
        kids: false,
        smoke: false,
        pets: false,
        practicing: "",
        occupation: "",
        placeInd: false,
        listingName: "",
        rentPay: "",
        rentDuration: "",
        homeType: "",
        moveInDate: "",
        moveOutDate: "",
        city: "",
        state: "",
        zipCode: "",
        addComments: ""
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleInputChange = e => {
        //should manage all fiel forms 
        this.setState({ [e.target.name]: e.target.value });
    }

    handleFormSubmit = (e, uid) => {
        e.preventDefault();
        console.log("Profile submitted");
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
        API.updateProfile(uid, {
            username: this.state.username,
            kids: this.state.kids,
            smoke: this.state.smoke,
            age: this.state.age,
            pets: this.state.pets,
            placeInd: this.state.placeInd,
            practicing: this.state.practicing
        }).then(data => console.log(data))

    };

    handleUpdate = e => {
        e.preventDefault();
        alert("button functioanlit in progress");
    }
    //handleInputchnage 
    //the form details 
    //input name, 
    //handleSubmit
    //handleStatus will be passed to profile but will conditionally
    // render the forms  for Listing vs Roomate only form  

    renderPage = (uid) => {
        if (this.state.currentPage === "Match") {
            return <Match />;
        } else if (this.state.currentPage === "Profile") {
            return (<Profile
                handleInputChange={this.handleInputChange}
                handleFormSubmit={(e) => this.handleFormSubmit(e, this.props.dataFromParent.uid)}
                handleUpdate={this.handleUpdate}
            />);
        } else if (this.state.currentPage === "Housing" && this.state.placeInd === true) {
            return <Housing />;
        } else {
            return <Match />;
        }
    };


    //maybee have loggein indicator in DB - update the flag to false 
    logout = (uid) => {
        // console.log(this.props.dataFromParent);
        console.log("logout function");
        console.log(uid);
        fire.auth().signOut();
        API.updateLogIn(uid)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    render() {

        console.log(this.props.dataFromParent.uid);
        return (
            <div>
                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                    logout={() => this.logout(this.props.dataFromParent.uid)}
                />

                {this.renderPage()}


            </div>

        );
    }
}



export default Homepage;

