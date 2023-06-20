import express from "express";
import morgan from "morgan";
import { productsRouter } from "./routes/products.route";
import { productModel } from "./models/products.model";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.get("/healthz", (req, res) => res.status(200).send("server runs..."));

app.listen(3000, () => console.log("server runs on port 3000"));

// routes
app.use(
  "/products",
  (req, res, next) =>
    productModel.connected ? next() : res.status(200).send("Loading data..."),
  productsRouter
);
