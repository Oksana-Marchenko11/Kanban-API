import { getAll } from "../services/tasks.js";
// import HttpError from "../helpers/error.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAll();
    // console.log(project);
    // res.send("hi");
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};
