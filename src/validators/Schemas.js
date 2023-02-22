const joi = require("joi");

//create genre schema
const createGenreSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": `Name is required for Genre Creation`,
  }),
});

//create Movie schema
const createMovieSchema = joi.object({
  genreId: joi.number().required().messages({
    "string.empty": `GenreId is required for Movie Creation`,
  }),
  title: joi.string().required().messages({
    "string.empty": `Title is required for Movie Creation`,
  }),
  year: joi.number().required().messages({
    "string.empty": `Year is required for Movie Creation`,
  }),
  coverImage: joi.string().required().messages({
    "string.empty": `CoverImage is required for Movie Creation`,
  }),
  movieFile: joi.string().required().messages({
    "string.empty": `MovieFile is required for Movie Creation`,
  }),
});

//create Serie Schema

const createSerieSchema = joi.object({
  genreId: joi.number().required().messages({
    "string.empty": `GenreId is required for Serie Creation`,
  }),
  title: joi.string().required().messages({
    "string.empty": `Title is required for Serie Creation`,
  }),
  year: joi.number().required().messages({
    "string.empty": `Year is required for Serie Creation`,
  }),
  coverImage: joi.string().required().messages({
    "string.empty": `CoverImage is required for Serie Creation`,
  }),
  description: joi.string().required().messages({
    "string.empty": `Description is required for Serie Creation`,
  }),
});

//create episodes
const createEpisodeSchema = joi.object({
  seriesId: joi.number().required().messages({
    "string.empty": `SerieId is required for Episode Creation`,
  }),
  title: joi.string().required().messages({
    "string.empty": `Title is required for Episode Creation`,
  }),
  episodeNumber: joi.number().required().messages({
    "string.empty": `EpisodeNumber is required for Episode Creation`,
  }),
  seasonNumber: joi.number().required().messages({
    "string.empty": `SeasonNumber is required for Episode Creation`,
  }),
  sipnosis: joi.string().required().messages({
    "string.empty": `Sipnosis is required for Episode Creation`,
  }),
  url: joi.string().required().messages({
    "string.empty": `Url is required for Episode Creation`,
  }),
});

module.exports = {
  createGenreSchema,
  createMovieSchema,
  createSerieSchema,
  createEpisodeSchema,
};
