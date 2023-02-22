const express = require("express");
const router = express.Router();
//validations
const Schema = require("../validators/Schemas");
const validate = require("../validators/validate");
//controllers
const episodeController = require("../controllers/episode/episodeController");
router
  .route("/getall")
  .get((req, res, next) => episodeController.getEpisodes(req, res, next));

router.route("/create").post(
  (req, res, next) => validate(req, res, next, Schema.createEpisodeSchema),
  async (req, res, next) => episodeController.episodeCreate(req, res, next)
);

module.exports = router;
