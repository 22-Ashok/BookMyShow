import { Router } from "express";
import validation from "../middleware/validation";
import { signUpSchema } from "../schema/userSchema/signUpSchema";
import { logInSchema } from "../schema/userSchema/logInSchema";
import signUp from "../controller/user/signUp";
import logIn from "../controller/user/logIn"

const router = Router();

router.post("/auth/signup", validation(signUpSchema), signUp);
router.post("/auth/login", validation(logInSchema), logIn)

export default router;