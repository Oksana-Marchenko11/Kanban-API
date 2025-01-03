import express from "express";
import {
  getAllColumn,
  columnById,
  createNewColumn,
  columnByProjectId,
} from "../controllers/columnControllers.js";

const columnRouter = express.Router();

columnRouter.get("/", getAllColumn);
columnRouter.get("/:id", columnById);
columnRouter.post("/", createNewColumn);
columnRouter.get("/by-project/:projectId", columnByProjectId);

export default columnRouter;
