import { RequestHandler } from 'express';

import { categories } from '../models/category.model';
import {
  createReq,
  createRes,
  findOneParam,
  findOneReq,
  findOneRes,
  findReq,
  findRes,
  removeParam,
  removeReq,
  removeRes,
  updateParam,
  updateReq,
  updateRes,
} from '../types/category.endpoint';

export const create: RequestHandler<any, createRes, createReq> = (req, res) => {
  const category = categories.create(req.body);
  res.status(201).json(category);
};

export const find: RequestHandler<any, findRes, findReq> = (req, res) => {
  res.status(200).json(categories.find());
};

export const findOne: RequestHandler<findOneParam, findOneRes, findOneReq> = (req, res, next) => {
  const category = categories.findOne(+req.params.id);
  if (!category) return next(new Error('category not found'));
  res.status(200).json(category);
};

export const update: RequestHandler<updateParam, updateRes, updateReq> = (req, res, next) => {
  const category = categories.update({ id: +req.params.id, ...req.body });
  if (!category) return next(new Error('category not found'));
  res.status(200).json(category);
};

export const remove: RequestHandler<removeParam, removeRes, removeReq> = (req, res, next) => {
  const category = categories.remove(+req.params.id);
  if (!category) return next(new Error('category not found'));
  res.statusMessage = 'DELETED';
  res.status(200).json(category);
};
