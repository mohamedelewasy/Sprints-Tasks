import { Iproduct } from '../types/product.dto';

class Products {
  #products: Iproduct[];

  constructor() {
    this.#products = [];
  }

  create(product: Pick<Iproduct, 'name' | 'price' | 'category_id'>): Iproduct {
    this.#products.push({ id: Date.now(), ...product });
    return this.#products.at(-1) as Iproduct;
  }

  find(): Iproduct[] {
    return this.#products;
  }

  findOne(id: number): Iproduct | undefined {
    for (let i = 0; i < this.#products.length; i++)
      if (this.#products[i].id === id) return this.#products[i];
    return undefined;
  }

  #getProductIndex(id: number): number | undefined {
    for (let i = 0; i < this.#products.length; i++) if (this.#products[i].id === id) return i;
    return undefined;
  }

  update(product: Iproduct): Iproduct | undefined {
    const productIndex = this.#getProductIndex(product.id);
    if (productIndex === undefined) return undefined;
    this.#products[productIndex] = product;
    return this.#products[productIndex];
  }

  remove(id: number): Iproduct | undefined {
    const productIndex = this.#getProductIndex(id);
    if (productIndex === undefined) return undefined;
    const target = this.#products[productIndex];
    this.#products.splice(productIndex, 1);
    return target;
  }
}

export const products = new Products();
