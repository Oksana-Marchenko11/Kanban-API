import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import projectRouter from "./rotes/projectRoutes.js";
import tasksRouter from "./rotes/tasksRouters.js";
import columnRouter from "./rotes/columnRouters.js";
import dotenv from "dotenv";

dotenv.config(); // додає в налаштування компютера дані, що знаходяться в .env

const app = express(); //створює вебсервер
app.use(express.json()); // Дозволяє обробляти JSON-дані, бачить, що ми передаємо в body;
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/project", projectRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/column", columnRouter);

app.use((req, res) => res.status(404).json({ message: "Not found" }));

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Example app listening on port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); // закриває всі запущені фонові процеси
  });
