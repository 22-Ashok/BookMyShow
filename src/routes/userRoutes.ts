import { Router } from "express";
import otpGen from "../controller/user/otpGen";
import otpValidate from "../controller/user/otpValidate"
import userAuth from "../middleware/userAuth";
import editProfile from "../controller/user/editProfile";
import validation from "../middleware/validation";
import userSchema from "../schema/userSchema";
const router = Router();


router.post("/auth/generate-otp", otpGen);
router.post("/auth/validate-otp", otpValidate);
router.post("/users",validation(userSchema), userAuth, editProfile);
export default router;