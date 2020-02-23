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
        return axios.put("/api/profile/" + id, profileData);
    }

    //,
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id)
    // }
};