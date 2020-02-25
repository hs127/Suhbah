import axios from "axios";

// The search method retrieves books from the server
// It accepts a "query" or term to search the google api for 
export default {
    createUser: function (userData) {
        return axios.post("/api/signup", userData)
    },
    updateLogIn: function (id) {
        return axios.put("/api/signup/" + id);
    },
    updateLogIntwo: function (id) {
        return axios.put("/api/login/" + id);
    },
    updateProfile: function (id, profileData) {
        console.log(profileData)
        return axios.put("/api/profile/" + id, profileData);
    },
    listHome: function (id, homeData) {
        return axios.post("/api/list/" + id, homeData)
    },
    getRoomates: function () {
        return axios.get("/api/roomate")
        // },
        // getCurrentUser: function (id) {
        //     return axios.get("/api/users/" + id);
    },
    //this returns the current user data and it's homedeatils post associated with it 
    getCurrentUser: function (id) {
        return axios.get("/api/userextradeatils/" + id);
    }

    //,
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id)
    // }
};