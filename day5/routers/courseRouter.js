import express from "express";
import routes from "../routes";
import { newCourse, mine, courses } from "../controllers/courseControllers";

const courseRouter = express.Router();

courseRouter.get("/", courses);
courseRouter.get(routes.new, newCourse);
courseRouter.get(routes.mine, mine);

export default courseRouter;
