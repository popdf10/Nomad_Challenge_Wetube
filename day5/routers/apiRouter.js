import express from "express";
import routes from "../routes";
import { doc, api } from "../controllers/apiControllers";
import v1Router from "./v1Router";
import v2Router from "./v2Router";

const apiRouter = express.Router();

apiRouter.get("/", api);
apiRouter.get(routes.doc, doc);
apiRouter.use(routes.v1, v1Router);
apiRouter.use(routes.v2, v2Router);

export default apiRouter;
