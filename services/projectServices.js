import { Project} from "../models/Project.js";

// export const getAll = () => Project.find();

export const getAll = async () => {
  try {
    const projects = await Project.find(); // Отримання всіх проектів
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects from MongoDB");
  }
};
export const getById = async (id) => {
  try {
    const projectById = await Project.findById(id);
    return projectById;
  } catch (error) {}
};
export const newProject = async (task) => {
  try {
    const projectNew = await Project.create(task);
    return projectNew;
  } catch (error) {}
};
