import { Schema, model } from "mongoose";

export const Products = model(
  "products",
  new Schema(
    {
      title: { type: String, required: true, unique: true },
      price: { type: Number },
    },
    { timestamps: true }
  )
);
