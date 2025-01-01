import * as serviceFunctions from "../services/familyServices.js";
import HttpError from "../helpers/error.js";
import { familyAddSchema, familyUpdateSchema } from "../Schemas/FamilyJoi.js";

const getAllFamily = async (req, res, next) => {
  try {
    const family = await serviceFunctions.getAll();
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
    res.json(familyById);
  } catch (error) {
    next(error);
  }
};

const postFamily = async (req, res, next) => {
  try {
    const { error } = familyAddSchema.validate(req.body);
    if (error) {
      // error якщо помилка валвдації, якщо нема, то буде лише value;
      throw HttpError(400, error.message);
    }
    const addedfamily = await serviceFunctions.postOne(req.body);
    res.status(201).json(addedfamily);
  } catch (error) {
    next(error);
  }
};

const updateByIdFamily = async (req, res, next) => {
  try {
    const { error } = familyUpdateSchema.validate(req.body);
    if (error) {
      // error якщо помилка валідації, якщо нема, то буде лише value;
      throw HttpError(400, error.message);
    }
    console.log("Look: ", req.params);
    const updatedFamily = await serviceFunctions.updateOne(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedFamily);
  } catch (error) {
    next(error);
  }
};

const deleteFamilyById = async (req, res, next) => {
  try {
    const deleteFamilyMember = await serviceFunctions.deleteById(req.params.id);
    res.status(200).json(deleteFamilyMember);
  } catch (error) {
    next(error);
  }
};

export default {
  getAllFamily,
  getByIdFamily,
  postFamily,
  updateByIdFamily,
  deleteFamilyById,
};
