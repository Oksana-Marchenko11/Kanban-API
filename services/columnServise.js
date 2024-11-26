import { Column } from "../models/Project.js";

export const getAll = async () => {
  try {
    const columns = await Column.find();
    return columns;
  } catch (error) {
    throw new Error("Failed to fetch tasks from MongoDB");
  }
};

export const getById = async (id) => {
  try {
    const columnById = await Column.findById(id);
    return columnById;
  } catch (error) {}
};
export const newColumn = async (column) => {
  try {
    const columnNew = await Column.create(column);
    return columnNew;
  } catch (error) {}
};
