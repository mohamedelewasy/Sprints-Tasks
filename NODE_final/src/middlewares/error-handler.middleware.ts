import { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400).json({ error: err.message });
};
