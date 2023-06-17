import axios from "axios";
import http from "http";
import { categoryAPI, currencyAPI, productsAPI } from "../app";
import { Icategory, Iproduct } from "../types";

const getProducts = (
  products: Iproduct[],
  categories: Icategory[],
  currency: number
) => {
  const categoriesMap = new Map<number, number>();

  categories.forEach((category, i) => categoriesMap.set(category.id, i));

  products.forEach((product) => {
    const categoryIndex = categoriesMap.get(product.category.id) as number;
    if (categories[categoryIndex].products === undefined)
      categories[categoryIndex].products = [];
    product.price = parseFloat((product.price / currency).toFixed(3));
    categories[categoryIndex].products.push(product);
  });

  return categories;
};

export const getProductsMiddleware = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  url: URL
) => {
  const baseCurrency = url.searchParams.get("cur") || "USD";

  const currency = await axios.get(`${currencyAPI}?base=${baseCurrency}`);
  // validate currency
  if (currency.data.base.toLowerCase() != baseCurrency.toLowerCase()) {
    res.statusCode = 400;
    res.statusMessage = "INVALID CUR";
    res.end();
  }
  const products = await axios.get(productsAPI);
  const categories = await axios.get(categoryAPI);
  const formatedProducts = getProducts(
    products.data,
    categories.data,
    baseCurrency.toLowerCase() === "egp" ? 1 : currency.data.rates.EGP
  );
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(formatedProducts));
  res.end();
};
