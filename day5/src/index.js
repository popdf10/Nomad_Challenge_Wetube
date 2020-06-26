import express from "express";
import routes from "../routes";
import globalRouter from "../routers/globalRouter";
import courseRouter from "../routers/courseRouter";
import apiRouter from "../routers/apiRouter";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.courses, courseRouter);
app.use(routes.api, apiRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
