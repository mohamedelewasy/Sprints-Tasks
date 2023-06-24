import { Router } from 'express';

import * as C from '../controllers/categories.controller';
import { auth } from '../middlewares/auth.middleware';
import * as V from '../validators/categories/categories.middleware';

const router = Router();

router.route('/').get(C.find).post(auth, V.createVal, C.create);
router
  .route('/:id')
  .get(V.findOneVal, C.findOne)
  .put(auth, V.updateVal, C.update)
  .delete(auth, V.removeVal, C.remove);

export const categoriesRoutes = router;
