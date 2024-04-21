import { Router } from "express";
import { getProfile, login, logout, register } from "../controllers/user.controller.js";
import { isloggedIn } from "../middleware/auth.middleware.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', isloggedIn , getProfile);

export default router;
