import express from "express";
import routes from "../routes";
import { buy, refund, v1 } from "../controllers/v1Contorllers";

const v1Router = express.Router();

v1Router.get("/", v1);
v1Router.get(routes.buy, buy);
v1Router.get(routes.refund, refund);

export default v1Router;
