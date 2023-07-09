import { Schema, model, Types } from "mongoose";

export const Users = model(
  "users",
  new Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      token: String,
      cart: [{ type: Types.ObjectId, ref: "products", unique: true }],
    },
    { timestamps: true }
  )
);
