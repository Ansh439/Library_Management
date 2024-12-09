import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String },
  eventBookings: [
    {
      eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
      date: { type: Date },
      status: { type: String, default: "Pending" },
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
