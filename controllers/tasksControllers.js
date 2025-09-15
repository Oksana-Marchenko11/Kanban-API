import {
  getAll,
  getById,
  newTask,
  getByProjectAndColumnId,
} from "../services/tasksServices.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTasksById = async (req, res, next) => {
  try {
    const task = await getById(req.params.id);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const createNewTask = async (req, res, next) => {
  try {
    console.log(req.body);
    const createdTask = await newTask(req.body);
    res.json(createdTask);
  } catch (error) {
    next(error);
  }
};
export const getTasksByProjectAndColumnId = async (req, res, next) => {
  try {
    console.log(req.body);
    const tasks = await getByProjectAndColumnId(req.body);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};
