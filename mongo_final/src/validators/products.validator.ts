import { RequestHandler } from "express";
import z from "zod";
import { Types } from "mongoose";

const createSchema = z.object({
  title: z.string().min(3),
  price: z.number().min(0.01),
});
const updateSchema = z.object({
  title: z.optional(z.string().min(3)),
  price: z.optional(z.number().min(0.01)),
});

export const paramVal: RequestHandler = (req, res, next) => {
  const schema = z.object({
    id: z.string().refine((val) => Types.ObjectId.isValid(val)),
  });
  const validator = schema.safeParse(req.params);
  if (validator.success === false) res.status(406).json(validator.error.errors);
  else {
    req.params.id = validator.data.id as any;
    next();
  }
};

export const createVal: RequestHandler = (req, res, next) => {
  const validator = createSchema.safeParse(req.body);
  if (validator.success === false) res.status(406).json(validator.error.errors);
  else {
    req.body = validator.data;
    next();
  }
};
export const updateVal: RequestHandler = (req, res, next) => {
  const validator = updateSchema.safeParse(req.body);
  if (validator.success === false) res.status(406).json(validator.error.errors);
  else {
    req.body = validator.data;
    next();
  }
};
