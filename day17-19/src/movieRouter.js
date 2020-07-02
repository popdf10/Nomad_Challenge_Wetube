import express from "express";
import { home, getCreate, postCreate } from "./movieController";
import routes from "../routes";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);

movieRouter.get(routes.create, getCreate);
movieRouter.post(routes.create, postCreate);

export default movieRouter;
