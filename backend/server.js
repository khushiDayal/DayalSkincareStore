import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_route.js";
import productRoutes from "./routes/product_route.js";
import cartRoutes from "./routes/cart_route.js";
import couponRoutes from "./routes/coupon_route.js"; 
import paymentRoutes from "./routes/payment_route.js";
import analyticsRoutes from "./routes/analytics_route.js";


import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows you to parse the body of the request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:" + PORT);

    connectDB();
});