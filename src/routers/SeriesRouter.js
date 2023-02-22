const {
  createSerie,
  getAllSeries,
  getSerie,
} = require("../controllers/serie/SerieController");
const express = require("express");

const validate = require("../validators/validate");

const Schema = require("../validators/Schemas");

const router = express.Router();

//create a movie C
router.route("/create").post(
  (req, res, next) => validate(req, res, next, Schema.createSerieSchema),
  (req, res) => createSerie(req, res)
);
//get all movies R
router.route("/getall").get((req, res) => getAllSeries(req, res));

//get seasons with episodes
router.route("/:id").get((req, res) => getSerie(req, res));

module.exports = router;
