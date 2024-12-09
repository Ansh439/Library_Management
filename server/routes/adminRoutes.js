const express = require('express');
const {
  maintenanceMenu,
  addMembership,
  updateMembership,
  manageUsers,
  manageVendors,
} = require('../controllers/adminController');
const { protect, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/maintenance', protect, isAdmin, maintenanceMenu); // Access maintenance menu
router.post('/membership/add', protect, isAdmin, addMembership); // Add membership
router.put('/membership/update', protect, isAdmin, updateMembership); // Update membership
router.get('/users/manage', protect, isAdmin, manageUsers); // Manage users
router.get('/vendors/manage', protect, isAdmin, manageVendors); // Manage vendors

module.exports = router;
