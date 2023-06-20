import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller";
import {
  createProductVal,
  updateProductVal,
} from "../validators/products.validator";

const router = Router();

router.route("/").get(getProducts).post(createProductVal, createProduct);
router
  .route("/:productId")
  .get(getProduct)
  .put(updateProductVal, updateProduct)
  .delete(deleteProduct);

export const productsRouter = router;
