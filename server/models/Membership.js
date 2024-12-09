const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    duration: { type: String, enum: ['6 months', '1 year', '2 years'], default: '6 months' },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true }
}, { timestamps: true });

membershipSchema.pre('save', function (next) {
    const durationMap = {
        '6 months': 6,
        '1 year': 12,
        '2 years': 24
    };
    const months = durationMap[this.duration];
    this.endDate = new Date(this.startDate);
    this.endDate.setMonth(this.endDate.getMonth() + months);
    next();
});

module.exports = mongoose.model('Membership', membershipSchema);
