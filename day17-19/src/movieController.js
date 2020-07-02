/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "../routes";
import movieRouter from "./movieRouter";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Page Not Found" });
  }
};

export const getCreate = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};

export const postCreate = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres },
  } = req;
  const movie = await Movie.create({
    title,
    year,
    rating,
    synopsis,
    genres: genres.split(","),
  });
  res.redirect(routes.movieDetail(movie.id));
};

export const movieDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("edit", {
      pageTitle: `Edit ${movie.title}`,
      movie,
      genres: movie.genres.toString(),
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditMovie = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres },
  } = req;
  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres }
    );
    res.redirect(routes.movieDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

export const search = async (req, res) => {
  const {
    query: { year, rating },
  } = req;
  let movies = [];
  let pageTitle = "";
  try {
    if (year) {
      const movieByYear = await Movie.find({
        year: { $gte: year },
      });
      pageTitle = `Filtering by year: ${year}`;
      movies = movieByYear;
    } else if (rating) {
      const movieByRating = await Movie.find({
        rating: { $gte: rating },
      });
      pageTitle = `Filtering by rating: ${rating}`;
      movies = movieByRating;
    } else {
      res.render("404", { pageTitle: "404 Page Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle, movies });
};
