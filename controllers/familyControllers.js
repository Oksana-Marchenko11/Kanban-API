import * as serviceFunctions from "../services/familyServices.js";

export const getAllFamily = async (req, res) => {
  const family = await serviceFunctions.getAll();
  res.json(family);
};
