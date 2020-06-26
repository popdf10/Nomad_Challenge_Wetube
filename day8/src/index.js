import express from "express";
import path from "path";
import routers from "../routers";
import { localsMiddleware } from "../middlewears";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleware);
app.use("/", routers);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
