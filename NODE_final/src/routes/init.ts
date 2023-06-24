import { Router } from 'express';

import { errorMiddleware } from '../middlewares/error-handler.middleware';
import { notFoundEndpoints } from '../middlewares/not-found.middleware';
import { categoriesRoutes } from './categories.route';
import { productsRoutes } from './products.route';
import { usersRoutes } from './users.route';

const router = Router();
// routes
router.use(usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);

// endpoint not found handler
router.use(notFoundEndpoints);

// global error handler
router.use(errorMiddleware);

export const apiRoutes = router;
