const Cart = require('../models/Cart');
const Order = require('../models/Order');
const GuestList = require('../models/GuestList');

// View Cart
exports.viewCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add to Cart
exports.addToCart = async (req, res) => {
    try {
        const { itemId, quantity } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId: req.user.id },
            { $push: { items: { itemId, quantity } } },
            { new: true, upsert: true }
        );
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Checkout
exports.checkoutCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

        const order = new Order({ userId: req.user.id, items: cart.items });
        await order.save();
        await Cart.findOneAndDelete({ userId: req.user.id });
        res.status(200).json({ message: 'Order placed', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Guest List Management
exports.viewGuestList = async (req, res) => {
    try {
        const guests = await GuestList.find({ userId: req.user.id });
        res.status(200).json(guests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateGuestList = async (req, res) => {
    try {
        const { guestId, name, details } = req.body;
        const guest = await GuestList.findByIdAndUpdate(guestId, { name, details }, { new: true });
        res.status(200).json(guest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteGuest = async (req, res) => {
    try {
        const { guestId } = req.body;
        await GuestList.findByIdAndDelete(guestId);
        res.status(200).json({ message: 'Guest deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Check Order Status
exports.checkOrderStatus = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

