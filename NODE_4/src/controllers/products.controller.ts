import axios, { Axios, AxiosError } from "axios";
import AsyncHandler from "express-async-handler";
import { productModel } from "../models/products.model";
import { RequestHandler } from "express";
import { Iproduct } from "../types/schema";

export const getProducts: RequestHandler = (req, res) => {
  res.status(200).json(productModel.data);
};

export const getProduct: RequestHandler = (req, res) => {
  const product = productModel.products.get(+req.params.productId);
  if (!product) return res.status(400).json({ msg: "product not found" });
  res.status(200).json(product);
};

export const createProduct: RequestHandler<unknown, unknown, Iproduct> = (
  req,
  res
) => {
  req.body.id = Date.now();
  productModel.products.set(req.body.id, req.body);
  res.status(200).json(productModel.products.get(req.body.id));
};

export const updateProduct: RequestHandler<
  { productId: string },
  unknown,
  Iproduct
> = (req, res) => {
  if (!productModel.products.has(+req.params.productId))
    return res.status(400).json({ msg: "product not found" });
  req.body.id = +req.params.productId;
  productModel.products.set(req.body.id, req.body);
  res.status(200).json(productModel.products.get(req.body.id));
};

export const deleteProduct: RequestHandler = (req, res) => {
  if (!productModel.products.has(+req.params.productId))
    return res.status(400).json({ msg: "product not found" });
  productModel.products.delete(+req.params.productId);
  res.statusMessage = "deleted";
  res.sendStatus(204);
};
