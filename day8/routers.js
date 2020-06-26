import express from "express";
import routes from "./routes";
import { home, profile, photos, login } from "./controllers";

const routers = express.Router();

routers.get(routes.home, home);
routers.get(routes.login, login);
routers.get(routes.photos, photos);
routers.get(routes.profile, profile);

export default routers;
