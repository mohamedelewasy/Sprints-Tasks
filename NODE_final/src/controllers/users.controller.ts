import { RequestHandler } from 'express';

import { users } from '../models/users.model';
import { loginReq, loginRes, registerationReq, registrationRes } from '../types/user.endpoints';
import { hashPassword } from '../utils/crypt';
import { generateUserToken } from '../utils/token';

export const registration: RequestHandler<any, registrationRes, registerationReq> = (
  req,
  res,
  next
) => {
  // check if user is already exists
  if (users.findOneByEmail(req.body.email)) return next(new Error('user already exists.'));
  // crypt password
  req.body.password = hashPassword(req.body.password);
  users.create(req.body);
  res.status(200).json({ success: true });
};

export const login: RequestHandler<any, loginRes, loginReq> = (req, res, next) => {
  // check if user is already exists and correct password
  const user = users.findOneByEmail(req.body.email);
  if (!user || user.password !== hashPassword(req.body.password))
    return next(new Error('invalid email or password'));

  user.token = generateUserToken({ email: user.email });
  res.status(200).json(user as loginRes);
};
