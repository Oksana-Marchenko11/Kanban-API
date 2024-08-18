import express from "express";
import familyControllers from "../controllers/familyControllers.js";

const familyRouter = express.Router();

familyRouter.get("/", familyControllers.getAllFamily);
familyRouter.get("/:id", familyControllers.getByIdFamily);
familyRouter.post("/", familyControllers.postFamily);
export default familyRouter;
