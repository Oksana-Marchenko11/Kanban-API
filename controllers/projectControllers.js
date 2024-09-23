import { getAll } from "../services/projectServices.js";
// import HttpError from "../helpers/error.js";

export const getAllProject = async (req, res, next) => {
  try {
    const project = await getAll();
    // console.log(project);
    // res.send("hi");
    res.json(project);
  } catch (error) {
    next(error);
  }
};
