// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   userId: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   contactNumber: { type: String },
//   eventBookings: [
//     {
//       eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
//       date: { type: Date },
//       status: { type: String, default: "Pending" },
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);

// export default User;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'vendor', 'user'], default: 'user' }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
