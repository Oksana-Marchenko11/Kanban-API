import express from "express";
import cors from "cors";
import morgan from "morgan";
import animalRouter from "./rotes/animalsRouters.js";
import familyRouter from "./rotes/familyRouters.js";

const app = express(); //створює вебсервер
app.use(express.json()); // Дозволяє обробляти JSON-дані, бачить, що ми передаємо в body;
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/animals", animalRouter);
app.use("/api/family", familyRouter);

app.use((req, res) => res.status(404).json({ message: "Not found" }));
console.log(process.argv);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
