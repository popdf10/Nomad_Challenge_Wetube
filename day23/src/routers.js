import express from "express";
import { getHome, postHome, read } from "./controllers";
import { uploadTextFile } from "./middlewares";

const router = express.Router();

router.get("/", getHome);
router.post("/", uploadTextFile, postHome);

router.get("/read", read);

export default router;
