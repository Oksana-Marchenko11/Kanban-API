import express from "express";
import { getAllFamily } from "../controllers/familyControllers.js";

const familyRouter = express.Router();

familyRouter.get("/", getAllFamily);

export default familyRouter;
