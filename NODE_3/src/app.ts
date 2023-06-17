import http from "http";
import { createProductMiddleware } from "./middlewares/create-product";
import { getProductsMiddleware } from "./middlewares/get-products";

export const currencyAPI = "https://api.exchangerate.host/latest";
export const productsAPI = "https://api.escuelajs.co/api/v1/products";
export const categoryAPI = "https://api.escuelajs.co/api/v1/categories";

const server = http.createServer(async (req, res) => {
  const url = new URL(`http://temp${req.url}`);

  if (url.pathname === "/" && req.method === "GET")
    getProductsMiddleware(req, res, url);
  else if (url.pathname === "/" && req.method === "POST")
    createProductMiddleware(req, res);
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("server is listening on port 3000"));
