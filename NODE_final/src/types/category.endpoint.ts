import { Icategory } from './category.dto';

export interface createReq {
  name: string;
}
export type createRes = Icategory;

export interface findReq {}
export type findRes = Icategory[];

export interface findOneParam {
  id: string;
}
export interface findOneReq {}
export type findOneRes = Icategory;

export interface updateParam {
  id: string;
}
export interface updateReq {
  name: string;
}
export type updateRes = Icategory;

export interface removeParam {
  id: string;
}
export interface removeReq {}
export type removeRes = Icategory;
