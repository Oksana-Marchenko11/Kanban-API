import {
  getAll,
  getById,
  newProject,
  getByName,
} from "../services/projectServices.js";
// import HttpError from "../helpers/error.js";

export const getAllProject = async (req, res, next) => {
  try {
    const project = await getAll();
    res.json(project);
  } catch (error) {
    next(error);
  }
};

export const projectById = async (req, res, next) => {
  try {
    const project = await getById(req.params.id);
    res.json(project);
  } catch (error) {
    next(error);
  }
};

export const createNewProject = async (req, res, next) => {
  try {
    console.log(req.body);
    const createdProject = await newProject(req.body);
    res.json(createdProject);
  } catch (error) {
    next(error);
  }
};

export const projectByName = async (req, res, next) => {
  try {
    const project = await getByName(req.params.name);
    res.json(project);
  } catch (error) {
    next(error);
  }
};
