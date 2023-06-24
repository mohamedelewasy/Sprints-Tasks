import { RequestHandler } from 'express';

export interface registerationReq {
  email: string;
  password: string;
}

export interface registrationRes {
  success: boolean;
}

export interface loginReq {
  email: string;
  password: string;
}

export interface loginRes {
  email: string;
  password: string;
  token: string;
}
