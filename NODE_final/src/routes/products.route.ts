import { Router } from 'express';

import * as P from '../controllers/products.controller';
import { auth } from '../middlewares/auth.middleware';
import * as V from '../validators/products/products.middleware';

const router = Router();

router.route('/').get(P.find).post(auth, V.createVal, P.create);
router
  .route('/:id')
  .get(V.findOneVal, P.findOne)
  .put(auth, V.updateVal, P.update)
  .delete(auth, V.removeVal, P.remove);

export const productsRoutes = router;
