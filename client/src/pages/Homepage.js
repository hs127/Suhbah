import React, { Component } from "react";
import API from "../utils/API";
// import Profile from "./pages/Profile";
import Navbar from "../components/Navbar";
// import Wrapper from "../components/Wrapper";
import Profile from "../components/Profile";
import Match from "../components/Match";
import Listing from "../components/ListHome";
import HomeSearch from "../components/HomeSearch";
import SubmitMessage from "../components/SubmitMessage";
import ErrorMessage from "../components/ErrorMessage";
import fire from "../config/Fire";


class Homepage extends Component {

    // state = {
    //     form: {
    //         username: "";
    //     }
    // }

    state = {
        currentPage: "",
        userID: "",
        username: "",
        age: 0,
        gender: "",
        kids: false,
        smoke: false,
        pets: false,
        practicing: "",
        occupation: "",
        placeInd: "",
        listingName: "",
        rentPay: "",
        rentDuration: "",
        homeType: "",
        moveInDate: "",
        moveOutDate: "",
        city: "",
        state: "",
        zipCode: "",
        addComments: "",
        submitHousing: false,
        redirect: false,
        roomates: []
    };

    // getRoomate = () => {
    //     API.getRoomate
    // }


    componentDidMount() {
        // this.searchRoomates();
    }

    currentuser = id => {
        API.getCurrentUser(id)
            .then(res => console.log(res))
            // .then(data => {
            //     console.log(this.state.result[0].volumeInfo.title);
            // })
            .catch(err => console.log(err));
    }


    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleInputChange = e => {
        //should manage all fiel forms 
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    //submit Buttton for Profile page 

    handleFormSubmit = (e, uid) => {
        e.preventDefault();
        console.log("Profile submitted");
        this.setState({ [e.target.name]: e.target.value });
        API.updateProfile(uid, {
            username: this.state.username,
            kids: this.state.kids,
            smoke: this.state.smoke,
            age: this.state.age,
            pets: this.state.pets,
            placeInd: this.state.placeInd,
            practicing: this.state.practicing,
            submitProfile: true
        }).then(data => console.log(data))
        //add empty strings 
        // resetFormFilds(e.target.name);

    };
    // resetFormFilds(names) {
    //     this.setState({ [e.target.name]: "" })
    // }

    handleListingSubmit = e => {
        e.preventDefault();
        console.log("Listing Submitted");

        this.setState({ [e.target.name]: e.target.value });
        this.setState({ submitHousing: true });
        API.listHome({
            listingName: this.state.listingName,
            rentPay: this.state.rentPay,
            rentDuration: this.state.rentDuration,
            homeType: this.state.homeType,
            moveInDate: this.state.moveInDate,
            moveOutDate: this.state.moveOutDate,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            addComments: this.state.addComments,
            submitHousing: true
        }).then(data => console.log(data))
    };

    handleHomeSearchSubmit = (e, uid) => {
        e.preventDefault();
        console.log("Home Search Submitted");
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ submitHousing: true });
        API.listHome(uid, {
            rentPay: this.state.rentPay,
            rentDuration: this.state.rentDuration,
            homeType: this.state.homeType,
            moveInDate: this.state.moveInDate,
            moveOutDate: this.state.moveOutDate,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            addComments: this.state.addComments,
            submitHousing: true
        }).then(data => console.log(data));


    };

    handleUpdate = e => {
        e.preventDefault();
        alert("button functiionality in progress");
    }


    searchRoomates = () => {
        API.getRoomates().then(data => {
            console.log(data);
        })
            .catch(err => console.log(err));


    }

    //handleInputchnage 
    //the form details 
    //input name, 
    //handleSubmit
    //handleStatus will be passed to profile but will conditionally
    // render the forms  for Listing vs Roomate only form 
    //If Profile page is not submitted or no matches to show a message on page
    //No matches please update profile or search 
    //add a If statement if submittedFOrm is false to render "Submit Profile before Housing deatils"

    renderPage = () => {
        console.log("render function");
        console.log(this.state.submitHousing);
        if (this.state.currentPage === "Match") {
            return (<Match />);
        }
        else if (this.state.currentPage === "Profile") {
            return (<Profile
                handleInputChange={this.handleInputChange}
                handleFormSubmit={(e) => this.handleFormSubmit(e, this.props.dataFromParent.uid)}
                handleUpdate={this.handleUpdate}
            />);
        }

        else if (this.state.currentPage === "Housing" && this.state.submitHousing === true) {
            return (<SubmitMessage username={this.state.username} />);
        }

        else if (this.state.currentPage === "Housing" && this.state.placeInd === "") {
            return (<ErrorMessage handlePageChange={this.handlePageChange} />);
        }
        else if (this.state.currentPage === "Housing" && this.state.placeInd === "true") {
            return (<Listing
                handleInputChange={this.handleInputChange}
                handleListingSubmit={this.handleListingSubmit}
            />);
        }
        else if (this.state.currentPage === "Housing" && this.state.placeInd === "false") {
            return (
                <HomeSearch
                    handleInputChange={this.handleInputChange}
                    handleHomeSearchSubmit={(e) => this.handleHomeSearchSubmit(e, this.props.dataFromParent.uid)}
                />
            );
        }
        else {
            return (<Match />);
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

    // resetForm = () => {
    //     this.setState({ fullName: "", email: "", message: "" });
    // }


    render() {
        console.log(this.state.placeInd);
        console.log(this.props.dataFromParent.uid);
        const { redirect } = this.state;
        // if (redirect) {
        //     console.log("called");
        //     return <SubmitMessage />;
        // }
        return (
            <div>
                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                    logout={() => this.logout(this.props.dataFromParent.uid)}
                />

                {this.renderPage()}
                {this.currentuser(this.props.dataFromParent.uid)}



            </div>

        );
    }
}



export default Homepage;

