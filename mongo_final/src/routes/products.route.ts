import { Router } from "express";
import * as Prod from "../handlers/product.handler";
import * as Val from "../validators/products.validator";
import { isAuthenticated } from "../middlewares/isAuthenticated.middleware";

const router = Router();
router
  .route("/")
  .get(Prod.findAll)
  .post(isAuthenticated, Val.createVal, Prod.create);

router.route("/cart").get(isAuthenticated, Prod.getCart);

router
  .route("/:id")
  .all(Val.paramVal)
  .get(Prod.findOne)
  .patch(isAuthenticated, Val.updateVal, Prod.update)
  .delete(isAuthenticated, Prod.remove);

router.route("/:id/cart").post(isAuthenticated, Val.paramVal, Prod.addToCart);

export const productsRoutes = router;
