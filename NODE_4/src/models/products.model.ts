import axios from "axios";
import { Iproduct } from "../types/schema";

class ProductModel {
  products!: Map<number, Iproduct>;
  connected: boolean = false;

  constructor() {
    this.products = new Map();
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        this.connected = true;
        response.data.forEach((el: Iproduct) => this.products.set(el.id, el));
      })
      .catch((err) => {
        console.error(err);
        process.exit(-1);
      });
  }

  get data() {
    return Array.from(this.products.values());
  }
}

export const productModel = new ProductModel();
