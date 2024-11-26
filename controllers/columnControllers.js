import { getAll, getById, newColumn } from "../services/columnServise.js";

export const getAllColumn = async (req, res, next) => {
  try {
    const column = await getAll();
    res.json(column);
  } catch (error) {
    next(error);
  }
};

export const columnById = async (req, res, next) => {
  try {
    const column = await getById(req.params.id);
    res.json(column);
  } catch (error) {
    next(error);
  }
};
export const createNewColumn = async (req, res, next) => {
  try {
    console.log(req.body);
    const createdColumn = await newColumn(req.body);
    res.json(createdColumn);
  } catch (error) {
    next(error);
  }
};
