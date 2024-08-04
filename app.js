import express from "express";
import cors from "cors";
import animalRouter from "./rotes/animalsRouters.js";
import familyRouter from "./rotes/familyRouters.js";

const app = express(); //створює вебсервер
// app.use(express.json()); // Дозволяє обробляти JSON-дані

app.use(cors());

app.use("/api/animals", animalRouter);
app.use("/api/family", familyRouter);

app.use((req, res) => res.status(404).json({ messege: "Not found" }));
console.log(process.argv);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
