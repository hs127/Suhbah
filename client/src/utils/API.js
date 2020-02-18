import axios from "axios";

// The search method retrieves books from the server
// It accepts a "query" or term to search the google api for 
export default {
    createUser: function (userData) {
        return axios.post("/api/signup", userData)
    }
    //,
    // getSavedBooks: function () {
    //     return axios.get("/api/books");
    // },
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id)
    // }
};