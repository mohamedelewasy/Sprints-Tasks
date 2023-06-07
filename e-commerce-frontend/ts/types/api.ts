export type loginReq = { email: string; password: string };
export type loginRes = { token: string };

export type registerReq = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
export type registerRes = {
  token: string;
};

export interface Icategory {
  _id: string;
  name: string;
  image: string;
  productCount: number;
}

export type getCategoriesReq = undefined;
export type getCategoriesRes = {
  data: [Icategory];
};
