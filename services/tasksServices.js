import { Task } from "../models/Poject.js";

export const getAll = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error("Failed to fetch tasks from MongoDB");
  }
};

export const getById = async (id) => {
  try {
    const taskById = await Task.findById(id);
    return taskById;
  } catch (error) {}
};
export const newTask = async (task) => {
  try {
    const taskNew = await Task.create(task);
    return taskNew;
  } catch (error) {}
};
