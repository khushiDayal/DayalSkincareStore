import User from "../models/user_model.js";
import jwt from 'jsonwebtoken';

export const protectRoute = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token or invalid token format, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Set user data for the next middleware/controller
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
