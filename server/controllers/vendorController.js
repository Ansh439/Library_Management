const Item = require('../models/Item');
const Transaction = require('../models/Transaction');

// View Items
exports.viewItems = async (req, res) => {
    try {
        const items = await Item.find({ vendorId: req.user.id });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add Item
exports.addItem = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const item = new Item({ vendorId: req.user.id, name, price, stock });
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Item
exports.deleteItem = async (req, res) => {
    try {
        const { itemId } = req.body;
        await Item.findByIdAndDelete(itemId);
        res.status(200).json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// View Transactions
exports.viewTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ vendorId: req.user.id });
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
