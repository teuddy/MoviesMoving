const express = require("express");

const searchController = require("../controllers/search/SearchController");
const router = express.Router();

//find all movies where title match the search query or search query match the genre name
//resoruces?search=somequery:D
router.route("/").get((req, res) => {
  searchController.searching(req, res);
});

module.exports = router;
