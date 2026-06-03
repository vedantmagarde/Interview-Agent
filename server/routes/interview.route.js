import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser } from "../controllers/user.controller.js";
import { analyzeResume } from "../controllers/interview.controller.js";
import { upload } from "../middleware/multer.js";


const interviewRouter = express.Router();

interviewRouter.get("/resume", isAuth, upload.single("resume"), analyzeResume);



export default interviewRouter;