import express from "express";
import {
  getAllColumn,
  columnById,
  createNewColumn,
} from "../controllers/columnControllers.js";

const columnRouter = express.Router();

columnRouter.get("/", getAllColumn);
columnRouter.get("/:id", columnById);
columnRouter.post("/", createNewColumn);
// projectRouter.put("/:id", familyControllers.updateByIdFamily);
// projectRouter.delete("/:id", familyControllers.deleteFamilyById);
export default columnRouter;
