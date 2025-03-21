import express from "express";
import { protectRoute } from "../middleware/auth_middleware.js";
import { getCoupon, validateCoupon } from "../controllers/coupon_controller.js";

const router = express.Router();

router.get("/", protectRoute, getCoupon);
router.get("/validate", protectRoute, validateCoupon);

export default router;