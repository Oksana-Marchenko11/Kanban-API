import { Task } from "../models/Poject.js";

export const getAll = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error("Failed to fetch projects from MongoDB");
  }
};
