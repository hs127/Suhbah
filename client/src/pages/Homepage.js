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
import RoomateSearch from "../components/RoomateSearch";
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
        lifeStyle: "",
        dietary: "",
        rentPay: 0,
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
        submitProfile: false,
        currentUser: [],
        roomates: [],
        query: {
            gender: "",
            placeInd: "",
            state: ""
        }
    };

    // getRoomate = () => {
    //     API.getRoomate
    // }


    componentDidMount() {
        this.searchRoomates();
        // this.currentuserfunction();
        console.log(this.props.dataFromParent.uid)
        // this.searchRoomates();
    }

    componentDidUpdate() {
        // this.currentuserfunction();
        //  this.searchRoomates();

    }


    // //currentuser willl update the state variables so that the render logi 
    currentuserfunction = () => {
        console.log("currentUser call");
        API.getCurrentUser(this.props.dataFromParent.uid)
            .then(info => {
                console.log(info)
                return info.data[0].kids;
            })
            // .then(res => this.setState({ currentUser: res.data }))
            .then(res => this.setState({ kids: res }))
            .then(data => {
                console.log(this.state.kids);
            })
            .catch(err => console.log(err));
    }


    handlePageChange = page => {
        this.setState({ currentPage: page });
        this.currentuserfunction();
    };

    handleInputChange = e => {
        //should manage all fiel forms 
        // console.log(e.target.value);
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    //submit Buttton for Profile page 

    handleFormSubmit = (e, uid) => {
        e.preventDefault();
        console.log("Profile submitted");
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ submitProfile: true });
        API.updateProfile(uid, {
            username: this.state.username,
            kids: this.state.kids,
            smoke: this.state.smoke,
            age: this.state.age,
            pets: this.state.pets,
            gender: this.state.gender,
            occupation: this.state.occupation,
            placeInd: this.state.placeInd,
            practicing: this.state.practicing,
            submitProfile: true
        }).then(data => console.log(data))
        //add empty strings 
        // resetFormFilds(e.target.name);
        this.currentuserfunction();
    };
    // resetFormFilds(names) {
    //     this.setState({ [e.target.name]: "" })
    // }

    handleListingSubmit = (e, uid) => {
        e.preventDefault();
        console.log("Listing Submitted");

        this.setState({ [e.target.name]: e.target.value });
        this.setState({ submitHousing: true });
        API.listHome(uid, {
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


    // 7: Start ROOMATESERACH CODE 

    handleSearchInputChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState(prevState => ({
            query: { ...prevState.query, [name]: value }
        }))
        console.log(this.state.query);
    }

    handleRoomateSearch = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log("roomate SEarch function");
        this.setState(prevState => ({
            query: { ...prevState.query, [name]: value }
        }));
        this.searchRoomates();
        console.log(this.state.query);
    }

    searchRoomates = () => {
        console.log("searchRoomate function");
        API.getRoomates({
            gender: this.state.query.gender,
            placeInd: this.state.query.placeInd
            // state: this.state.query.state
        }).then(res => this.setState({ roomates: res.data }))
            .then(data => console.log(data)).catch(err => console.log(err));
    }
    // 7: End ROOMATESERACH CODE

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
        // console.log(this.state.query);
        // console.log(this.state.submitHousing);
        if (this.state.currentPage === "Match") {
            return (
                <>
                    <RoomateSearch
                        query={this.state.query}
                        handleSearchInputChange={this.handleSearchInputChange}
                        handleRoomateSearch={(e) => this.handleRoomateSearch(e)}
                    />
                    <Match roomates={this.state.roomates} />
                </>);
        }
        else if (this.state.currentPage === "Profile" && this.state.currentUser.length > 0 && this.state.currentUser[0].submitProfile) {
            return (<SubmitMessage username={this.state.username} />);
        }
        else if (this.state.currentPage === "Profile" && !!this.state.submitProfile) {
            return (<SubmitMessage username={this.state.username} />);
        }
        else if (this.state.currentPage === "Profile") {
            return (<Profile
                handleInputChange={this.handleInputChange}
                handleFormSubmit={(e) => this.handleFormSubmit(e, this.props.dataFromParent.uid)}
                handleUpdate={this.handleUpdate}
            />
            );
        }
        else if (this.state.currentPage === "Housing" && this.state.currentUser.length > 0 && this.state.currentUser[0].submitHousing) {
            return (<SubmitMessage username={this.state.username} />);
        }
        else if (this.state.currentPage === "Housing" && !!this.state.submitHousing) {
            return (<SubmitMessage username={this.state.username} />);
        }
        // else if (this.state.currentPage === "Housing" && this.state.currentUser[0].placeInd != null) {
        //     return (<ErrorMessage handlePageChange={this.handlePageChange} />);
        // }
        else if (this.state.currentPage === "Housing" && this.state.placeInd === "") {
            return (<ErrorMessage handlePageChange={this.handlePageChange} />);
        }
        else if (this.state.currentPage === "Housing" && this.state.placeInd === "havePlace") {
            return (<Listing
                handleInputChange={this.handleInputChange}
                handleListingSubmit={(e) => this.handleListingSubmit(e, this.props.dataFromParent.uid)}
            />);
        }
        else if (this.state.currentPage === "Housing" && this.state.placeInd === "noPlace") {
            return (
                <HomeSearch
                    handleInputChange={this.handleInputChange}
                    handleHomeSearchSubmit={(e) => this.handleHomeSearchSubmit(e, this.props.dataFromParent.uid)}
                />
            );
        }
        else {
            return (<Match roomates={this.state.roomates} />);
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
        // console.log(this.state.placeInd);
        // console.log(this.props.dataFromParent.uid);
        // const { redirect } = this.state;
        // if (redirect) {
        //     console.log("called");
        //     return <SubmitMessage />;
        // }
        // console.log(this.state.currentUser);
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

