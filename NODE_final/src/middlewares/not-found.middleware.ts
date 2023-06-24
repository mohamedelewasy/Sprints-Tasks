import { RequestHandler } from 'express';

export const notFoundEndpoints: RequestHandler = (req, res, next) => {
  next(new Error('endpoint not found'));
};
