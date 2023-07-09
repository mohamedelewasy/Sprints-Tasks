import { RequestHandler } from "express";
import z from "zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const authVal: RequestHandler = (req, res, next) => {
  const validator = authSchema.safeParse(req.body);
  if (validator.success === false) res.status(406).json(validator.error.errors);
  else {
    req.body = validator.data;
    next();
  }
};
