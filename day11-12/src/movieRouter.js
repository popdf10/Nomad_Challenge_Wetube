import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";
import { selectMovie } from "./selectMovie";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/filter", filterMovie);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
