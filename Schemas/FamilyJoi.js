import Joi from "joi";

export const familyAddSchema = Joi.object({
  member: Joi.string().required(),
});

export const familyUpdateSchema = Joi.object({
  member: Joi.string(),
});
