import { Iproduct } from './product.dto';

// create find findOne update remove
export interface createReq {
  name: string;
  price: number;
  category_id: number;
}
export type createRes = Iproduct;

export interface findReq {}
export type findRes = Iproduct[];

export interface findOneParam {
  id: string;
}
export type findOneRes = Iproduct;

export interface updateParam {
  id: string;
}
export interface updateReq {
  name: string;
  price: number;
  category_id: number;
}
export type updateRes = Iproduct;

export interface removeParam {
  id: string;
}
export type removeRes = Iproduct;
