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

module.exports = {
  createGenreSchema,
  createMovieSchema,
  createSerieSchema,
};
