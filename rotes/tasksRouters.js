import express from "express";
import {
  getAllTasks,
  getTasksById,
  createNewTask,
} from "../controllers/tasksControllers.js";

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTasksById);
tasksRouter.post("/", createNewTask);

export default tasksRouter;
