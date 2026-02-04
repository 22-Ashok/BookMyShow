import { Router } from "express";
import otpGen from "../controller/user/otpGen";
import otpValidate from "../controller/user/otpValidate"
const router = Router();


router.post("/auth/generate-otp", otpGen);
router.post("/auth/validate-otp", otpValidate);

export default router;