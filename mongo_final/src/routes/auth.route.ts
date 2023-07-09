import { Router } from "express";
import * as Auth from "../handlers/auth.handler";
import { authVal } from "../validators/auth.validator";

const router = Router();
router.post("/signin", authVal, Auth.signin);
router.post("/signup", authVal, Auth.signup);

export const authRoutes = router;
