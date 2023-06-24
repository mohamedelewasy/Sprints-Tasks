import Crypto from 'crypto';

import { env } from '../config/env';

export const hashPassword = (password: string): string => {
  return Crypto.createHash('sha256')
    .update(password + env.crypto.paper)
    .digest('hex');
};
