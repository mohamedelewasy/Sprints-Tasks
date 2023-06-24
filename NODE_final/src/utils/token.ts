import jwt from 'jsonwebtoken';

import { env } from '../config/env';
import { Iuser } from '../types/user.dto';

export const generateUserToken = (
  payload: Pick<Iuser, 'email'>,
  expiresIn: string = '1h'
): string => {
  return jwt.sign(payload, env.jwt.secret, { expiresIn });
};

export const verifyToken = (token: string): Pick<Iuser, 'email'> | undefined => {
  try {
    const payload = jwt.verify(token, env.jwt.secret);
    return payload as { email: string };
  } catch (error) {
    return undefined;
  }
};
