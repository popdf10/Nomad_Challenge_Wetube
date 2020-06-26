import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";
import { query } from "express";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "Movies!", head: "Movies", movies });
};
export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movies = getMovieById(id);
  const title = movies.title;
  const summary = movies.summary;
  const genres = movies.genres;
  res.render("detail", { pageTitle: title, summary, genres });
};
export const filterMovie = (req, res) => {
  const {
    query: { year, rating },
  } = req;
  let movies = {};
  let pageTitle = "";
  let head = "";
  if (year) {
    movies = getMovieByMinimumYear(year);
    pageTitle = "Filtering by Year";
    head = `Searching by year: ${year}`;
  } else if (rating) {
    movies = getMovieByMinimumRating(rating);
    pageTitle = "Filtering by Rating";
    head = `Searching by rating: ${rating}`;
  } else {
    return res.render("404");
  }
  res.render("movies", { pageTitle, head, movies });
};
