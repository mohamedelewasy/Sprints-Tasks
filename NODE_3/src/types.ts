export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Icategory;
}

export interface Icategory {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
  products: Iproduct[];
}
