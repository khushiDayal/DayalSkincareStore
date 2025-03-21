import express from "express";
import { protectRoute } from "../middleware/auth_middleware.js";
import { checkoutSuccess, createCheckoutSession } from "../controllers/payment_controller.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/checkout-success", protectRoute, checkoutSuccess);

export default router;