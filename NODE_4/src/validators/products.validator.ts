import { RequestHandler } from "express";
import { createProductSchema, updateProductSchema } from "../types/schema";

export const createProductVal: RequestHandler = (req, res, next) => {
  const validator = createProductSchema.safeParse(req.body);
  if (validator.success === true) return next();
  res.status(400).json(validator.error.errors);
};

export const updateProductVal: RequestHandler = (req, res, next) => {
  const validator = updateProductSchema.safeParse(req.body);
  if (validator.success === true) return next();
  res.status(400).json(validator.error.errors);
};
