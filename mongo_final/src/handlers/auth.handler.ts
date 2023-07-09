import AsyncHandler from "express-async-handler";
import { Users } from "../models/user.model";
import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../config/env";

export const signup = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = hashSync(password, 10);
  const user = await Users.create({ email, password: hashedPassword });
  res.status(201).json({ id: user._id, email: user.email });
});

export const signin = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user || !compareSync(password, user.password))
    throw new Error("incorrect email or password");
  user.token = jwt.sign({ userId: user._id }, env().jwtSecret, {
    expiresIn: "1h",
  });
  await user.save();
  res.status(200).json({ token: user.token });
});
