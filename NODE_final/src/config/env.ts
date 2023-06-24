import dotenv from 'dotenv';

dotenv.config();

export const env = {
  environment: process.env.ENV,
  port: process.env.PORT || 3000,
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
  },
  crypto: {
    paper: process.env.PAPER,
  },
};
