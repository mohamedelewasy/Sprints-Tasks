import { RequestHandler } from 'express';

import { loginReq, registerationReq } from '../../types/user.endpoints';
import { checkValidatorErrors } from '../../utils/validator';
import { loginSchema, registertionSchema } from './users.schema';

export const registrationVal: RequestHandler = (req, res, next) => {
  const [validationResult, validationData] = checkValidatorErrors<registerationReq>(
    registertionSchema.safeParse(req.body)
  );
  if (!validationResult) return res.status(406).json(validationData);
  req.body = validationData;
  return next();
};

export const loginVal: RequestHandler = (req, res, next) => {
  const [validationResult, validationData] = checkValidatorErrors<loginReq>(
    loginSchema.safeParse(req.body)
  );
  if (!validationResult) return res.status(406).json(validationData);
  req.body = validationData;
  return next();
};
