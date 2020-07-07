import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router from "./routers";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
