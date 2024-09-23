import express from "express";
import { getAllTasks } from "../controllers/tasksControllers.js";

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
// projectRouter.get("/:id", familyControllers.getByIdFamily);
// projectRouter.post("/", familyControllers.postFamily);
// projectRouter.put("/:id", familyControllers.updateByIdFamily);
// projectRouter.delete("/:id", familyControllers.deleteFamilyById);
export default tasksRouter;
