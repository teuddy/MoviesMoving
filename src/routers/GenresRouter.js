const express = require("express");
const {
  findAllGenres,
  createGenre,
} = require("../controllers/genre/GenreController.js");

const validate = require("../validators/validate.js");
const Schema = require("../validators/Schemas.js");

const router = express.Router();
router.route("/create").post(
  (req, res, next) => validate(req, res, next, Schema.createGenreSchema),
  (req, res, next) => createGenre(req, res, next)
);

router.route("/getall").get((req, res) => {
  findAllGenres(req, res);
});

module.exports = router;
