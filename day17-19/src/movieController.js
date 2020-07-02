/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "../routes";

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

export const postCreate = (req, res) => {
  const { body } = req;
  console.log(body);
  res.redirect(routes.home);
};
