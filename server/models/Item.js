const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
