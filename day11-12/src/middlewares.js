import { routes } from "../routes";
import { getMovies } from "./db";

let movies = getMovies();

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Nomad Movies";
  res.locals.routes = routes;
  next();
};
