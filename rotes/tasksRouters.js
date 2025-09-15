import express from "express";
import {
  getAllTasks,
  getTasksById,
  createNewTask,
  getTasksByProjectAndColumnId,
} from "../controllers/tasksControllers.js";

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.get("/projectId/:projectId", getTasksByProjectAndColumnId);
tasksRouter.get("/:id", getTasksById);
tasksRouter.post("/", createNewTask);

export default tasksRouter;
