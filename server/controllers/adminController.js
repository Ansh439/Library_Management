const Membership = require('../models/Membership');
const User = require('../models/User');
const Vendor = require('../models/Vendor');

// Maintenance Menu Access
exports.maintenanceMenu = (req, res) => {
    res.status(200).json({ message: 'Admin Maintenance Menu Accessed' });
};

// Add Membership
exports.addMembership = async (req, res) => {
    try {
        const { vendorId, duration } = req.body;
        if (!vendorId || !duration) return res.status(400).json({ message: 'All fields are mandatory' });

        const membership = new Membership({ vendorId, duration });
        await membership.save();
        res.status(201).json({ message: 'Membership added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Membership
exports.updateMembership = async (req, res) => {
    try {
        const { membershipId, duration } = req.body;
        if (!membershipId || !duration) return res.status(400).json({ message: 'Membership ID and Duration are mandatory' });

        const membership = await Membership.findByIdAndUpdate(membershipId, { duration }, { new: true });
        res.status(200).json({ message: 'Membership updated', membership });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Manage Users
exports.manageUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Manage Vendors
exports.manageVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
