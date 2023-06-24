import { RequestHandler } from 'express';

import { users } from '../models/users.model';
import { verifyToken } from '../utils/token';

export const auth: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] || 'none';
  const payload = verifyToken(token);
  if (!payload) return res.sendStatus(401);
  const user = users.findOneByEmail(payload.email);
  if (!user) return res.sendStatus(401);
  next();
};
