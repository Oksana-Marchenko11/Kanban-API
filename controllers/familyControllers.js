import * as serviceFunctions from "../services/familyServices.js";
import HttpError from "../helpers/error.js";

const getAllFamily = async (req, res, next) => {
  try {
    const family = await serviceFunctions.getAll();
    if (!family) {
      throw HttpError(404);
    }
    res.json(family);
  } catch (error) {
    next(error);
  }
};

const getByIdFamily = async (req, res, next) => {
  try {
    const { id } = req.params;
    const familyById = await serviceFunctions.getById(id);
    if (!familyById) {
      throw HttpError(404, `id=${id} Not found`);
    }
    //   return res.status(404).json({ message: `id=${id} Not found` });
    // }
    // res.json(familyById);
    res.json(familyById);
  } catch (error) {
    next(error);
  }
};

const postFamily = async (req, res, next) => {
  try {
    const addedfamily = await serviceFunctions.postOne(req.body);
    res.status(201).json(addedfamily);
  } catch (error) {
    next(error);
  }
};
export default {
  getAllFamily,
  getByIdFamily,
  postFamily,
};
