export type loginReq = { email: string; password: string };
export type loginRes = { token: string };

export interface Icategory {
  _id: string;
  name: string;
  image: string;
  productCount: number;
}

export interface Iproduct {
  _id: string;
  name: string;
  image: string;
  category_id: string;
  price: number;
  discount: number;
  rating: number;
  rating_count: number;
  is_featured: boolean;
  is_recent: boolean;
  description: string;
}

export type registerReq = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
export type registerRes = {
  token: string;
};

export type getCategoriesReq = undefined;
export type getCategoriesRes = { data: [Icategory] };

export type getFeaturedReq = undefined;
export type getFeaturedRes = { data: [Iproduct] };
