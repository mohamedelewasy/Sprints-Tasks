import { MongooseError, connect } from "mongoose";
import express, { ErrorRequestHandler } from "express";
import env from "./config/env";
import { authRoutes } from "./routes/auth.route";
import { productsRoutes } from "./routes/products.route";

const app = express();

app.use(express.json());

connect(env().mongoUrl)
  .then(() => console.log("db connected"))
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });

app.listen(env().port, () => console.log(`server runs on port ${env().port}`));

// app routes
app.use(authRoutes);
app.use("/products", productsRoutes);
// global errors
const globalError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400).json({ message: err.message });
};
app.use(globalError);
