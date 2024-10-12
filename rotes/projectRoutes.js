import express from "express";
import {
  getAllProject,
  projectById,
  createNewProject,
} from "../controllers/projectControllers.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProject);
projectRouter.get("/:id", projectById);
projectRouter.post("/", createNewProject);
// projectRouter.put("/:id", familyControllers.updateByIdFamily);
// projectRouter.delete("/:id", familyControllers.deleteFamilyById);
export default projectRouter;
