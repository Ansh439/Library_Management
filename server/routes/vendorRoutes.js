const express = require('express');
const {
  viewItems,
  addItem,
  deleteItem,
  viewTransactions,
} = require('../controllers/vendorController');
const { protect, isVendor } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/items', protect, isVendor, viewItems); // View all items
router.post('/items/add', protect, isVendor, addItem); // Add new item
router.delete('/items/delete', protect, isVendor, deleteItem); // Delete an item

router.get('/transactions', protect, isVendor, viewTransactions); // View transactions

module.exports = router;
