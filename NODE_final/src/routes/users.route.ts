import { Router } from 'express';

import * as U from '../controllers/users.controller';
import * as V from '../validators/users/users.middleware';

const router = Router();

router.post('/registration', V.registrationVal, U.registration);
router.post('/login', V.loginVal, U.login);

export const usersRoutes = router;
