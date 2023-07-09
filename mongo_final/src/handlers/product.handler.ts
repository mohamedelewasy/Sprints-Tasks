import AsyncHandler from "express-async-handler";
import { Products } from "../models/product.model";
import { Users } from "../models/user.model";

export const findAll = AsyncHandler(async (req, res) => {
  res.status(200).json(await Products.find());
});

export const findOne = AsyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (!product) throw new Error("product not found");
  res.status(200).json(product);
});

export const create = AsyncHandler(async (req, res) => {
  res.status(201).json(await Products.create(req.body));
});

export const update = AsyncHandler(async (req, res) => {
  res
    .status(200)
    .json(await Products.findByIdAndUpdate(req.params.id, req.body));
});

export const remove = AsyncHandler(async (req, res) => {
  await Products.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export const addToCart = AsyncHandler(async (req, res) => {
  await Users.findOneAndUpdate(
    { _id: res.locals.userId, cart: { $ne: req.params.id } },
    {
      $push: { cart: req.params.id },
    }
  );
  res.sendStatus(200);
});

export const getCart = AsyncHandler(async (req, res) => {
  res
    .status(200)
    .json(await Users.findById(res.locals.userId).select(["cart"]));
});
