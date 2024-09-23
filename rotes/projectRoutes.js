import express from "express";
import { getAllProject } from "../controllers/projectControllers.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProject);
// projectRouter.get("/:id", familyControllers.getByIdFamily);
// projectRouter.post("/", familyControllers.postFamily);
// projectRouter.put("/:id", familyControllers.updateByIdFamily);
// projectRouter.delete("/:id", familyControllers.deleteFamilyById);
export default projectRouter;
