import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
import fire from './config/Fire';
import API from "./utils/API";

class App extends Component {


  state = {
    user: []
    // currentUser: []
  }


  // logout() {
  //   fire.auth().signOut();
  //   console.log("user logged out");
  // }

  componentDidMount() {
    this.authListener();

  }

  componentDidUpdate() {
    // this.currentuser(this.state.user.uid);

  }


  //currentuser willl update the state variables so that the render logi 
  currentuser = id => {
    console.log("currentUser call");
    API.getCurrentUser(id)
      // .then(res => res.data[0].kids)
      .then(res => this.setState({ currentUser: res.data }))
      // .then(data => {
      //     console.log(this.state.kids);
      // })
      .catch(err => console.log(err));
  }
  // var content;
  // if (userloggin) {
  // }
  // content = <h1>Please do login</h1>


  //have authentication details gere 
  //have lifecycle componenet compmount here to check for authentication 
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        // this.currentuser(this.state.user.uid);

      }
      else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      // <Router>
      <div>
        <Header />
        {this.state.user ?
          (<> <Homepage dataFromParent={this.state.user} /> </>)
          :
          (<Signup />)}
        {/* <Header />
          <Navbar />
          <Wrapper>
          if use is authenticated
            <Route exact path="/" component={Homepage} />
             <Route exact path="/profile" component={Profile} />
              if user is not authenticated
            <Route exact path="/signup" component={Signup} />
           
          </Wrapper> */}
      </div>
      // </Router>
    );
  }
}

export default App;
