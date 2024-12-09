const mongoose = require('mongoose');

const guestListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    details: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('GuestList', guestListSchema);
