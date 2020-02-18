import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
import fire from './config/Fire'

class App extends Component {


  state = {
    user: []
  }


  // logout() {
  //   fire.auth().signOut();
  //   console.log("user logged out");
  // }

  componentDidMount() {
    this.authListener();
  }
  // var content;
  // if (userloggin) {
  // }
  // content = <h1>Please do login</h1>


  //have authentication details gere 
  //have lifecycle componenet compmount here to check for authentication 
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
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
          (<> <Homepage /> </>)
          :
          (<Signup />)}
        {/* <Header />
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
          </Wrapper> */}
      </div>
      // </Router>
    );
  }
}

export default App;
