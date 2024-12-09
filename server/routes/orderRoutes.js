const express = require('express');
const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require('../controllers/orderController');
const { protect, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// User-specific routes
router.post('/create', protect, createOrder); // Create an order
router.get('/my-orders', protect, getUserOrders); // Get logged-in user's orders

// Admin-specific route
router.get('/all-orders', protect, isAdmin, getAllOrders); // Get all orders (admin only)

module.exports = router;
