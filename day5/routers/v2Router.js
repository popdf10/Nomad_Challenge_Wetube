import express from "express";
import routes from "../routes";
import { remove, edit, v2 } from "../controllers/v2Controllers";

const v2Router = express.Router();

v2Router.get("/", v2);
v2Router.get(routes.remove, remove);
v2Router.get(routes.edit, edit);

export default v2Router;
