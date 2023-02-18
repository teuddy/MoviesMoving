const MoviesRoutes = require("./MoviesRouter");
const GenresRoutes = require("./GenresRouter");
const SearchingRoutes = require("./SearchingRouter");
const SeriesRoutes = require("./SeriesRouter");
const express = require("express");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/movies",
    route: MoviesRoutes,
  },
  {
    path: "/genres",
    route: GenresRoutes,
  },
  {
    path: "/resources",
    route: SearchingRoutes,
  },
  {
    path: "/series",
    route: SeriesRoutes,
  },
];

//apply all routes to the main router obj
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
