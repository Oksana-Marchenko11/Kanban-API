import express from "express";
import animals from "../data/myAnimalsData.js";

const animalRouter = express.Router();

animalRouter.get("/", (req, res) => {
  res.json(animals);
});
animalRouter.get("/:id", (req, res) => {
  res.json(animals[0]);
});
animalRouter.post("/", (req, res) => {
  res.json(animals[0]);
});
animalRouter.put("/:id", (req, res) => {
  res.json(animals[0]);
});
animalRouter.delete("/:id", (req, res) => {
  res.json(animals[0]);
});
export default animalRouter;
