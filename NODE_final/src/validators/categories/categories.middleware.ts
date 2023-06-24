import { RequestHandler } from 'express';

import { createReq, updateParam, updateReq } from '../../types/category.endpoint';
import { checkValidatorErrors } from '../../utils/validator';
import { createSchema, paramIdSchema, updateSchema } from './categories.schema';

export const createVal: RequestHandler = (req, res, next) => {
  const [validationResult, validationData] = checkValidatorErrors<createReq>(
    createSchema.safeParse(req.body)
  );
  if (!validationResult) return res.status(406).json(validationData);
  req.body = validationData;
  return next();
};
export const findOneVal: RequestHandler = (req, res, next) => {
  const [validationResult, validationData] = checkValidatorErrors(
    paramIdSchema.safeParse(req.params)
  );
  if (!validationResult) return res.status(406).json(validationData);
  return next();
};

export const updateVal: RequestHandler = (req, res, next) => {
  const [validationResult, validationData] = checkValidatorErrors<updateReq>(
    updateSchema.safeParse(req.body)
  );
  const [paramValidationResult, paramValidationData] = checkValidatorErrors<updateParam>(
    paramIdSchema.safeParse(req.params)
  );
  if (!validationResult || !paramValidationResult)
    return res.status(406).json({ ...paramValidationData, ...validationData });
  req.body = validationData;
  return next();
};

export const removeVal: RequestHandler = (req, res, next) => {
  const [validationResult, validationData] = checkValidatorErrors(
    paramIdSchema.safeParse(req.params)
  );
  if (!validationResult) return res.status(406).json(validationData);
  return next();
};
