import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import env from "../config/env";
import { Users } from "../models/user.model";

export const isAuthenticated = AsyncHandler(async (req, res, next) => {
  const token = (req.headers.authorization || "").split(" ")[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }
  const payload = jwt.verify(token, env().jwtSecret) as { userId: string };
  const user = await Users.findOne({ _id: payload.userId, token });
  if (!user) {
    res.sendStatus(401);
    return;
  }
  res.locals.userId = payload.userId;
  next();
});
