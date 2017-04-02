// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(search) {

    console.log(search);

    return axios.get('/search', {
      params: {
        search: search
      }
    }).then(function(response) {
      // If get get a result, return that result's formatted address property
        return response.data.response.docs

    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  saveArticle: function(article) {
    console.log(article)
    return axios.post("/api", article);
  },
    deleteArticle: function(id) {
    console.log(id)
    return axios.post("/apiDelete", id);
  }
};

// We export the API helper
module.exports = helper;
