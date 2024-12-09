import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
