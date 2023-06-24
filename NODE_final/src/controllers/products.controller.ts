import { RequestHandler } from 'express';

import { categories } from '../models/category.model';
import { products } from '../models/products.model';
import {
  createReq,
  createRes,
  findOneParam,
  findOneRes,
  findReq,
  findRes,
  removeParam,
  removeRes,
  updateParam,
  updateReq,
  updateRes,
} from '../types/product.endpoint';

export const create: RequestHandler<any, createRes, createReq> = (req, res, next) => {
  const category = categories.findOne(req.body.category_id);
  if (!category) return next(new Error('category not found'));
  const product = products.create(req.body);
  res.status(201).json(product);
};

export const find: RequestHandler<any, findRes, findReq> = (req, res) => {
  res.status(200).json(products.find());
};

export const findOne: RequestHandler<findOneParam, findOneRes> = (req, res, next) => {
  const product = products.findOne(+req.params.id);
  if (!product) return next(new Error('product not found'));
  res.status(200).json(product);
};

export const update: RequestHandler<updateParam, updateRes, updateReq> = (req, res, next) => {
  const product = products.update({ id: +req.params.id, ...req.body });
  if (!product) return next(new Error('product not found'));
  res.status(200).json(product);
};

export const remove: RequestHandler<removeParam, removeRes> = (req, res, next) => {
  const product = products.remove(+req.params.id);
  if (!product) return next(new Error('product not found'));
  res.statusMessage = 'DELETED';
  res.status(200).json(product);
};
