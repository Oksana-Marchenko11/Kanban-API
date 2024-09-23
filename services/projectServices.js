import { Project } from "../models/Poject.js";

// export const getAll = () => Project.find();

export const getAll = async () => {
  try {
    const projects = await Project.find(); // Отримання всіх проектів
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects from MongoDB");
  }
};
