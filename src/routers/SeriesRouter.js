const { createSerie, getAllSeries } = require("../controllers/SerieController");
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

module.exports = router;
