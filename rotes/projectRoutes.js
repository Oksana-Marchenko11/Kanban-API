import express from "express";
import {
  getAllProject,
  projectById,
  createNewProject,
  projectByName,
} from "../controllers/projectControllers.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProject);
projectRouter.get("/:id", projectById);
projectRouter.post("/", createNewProject);
projectRouter.get("/name/:name", projectByName);

export default projectRouter;
