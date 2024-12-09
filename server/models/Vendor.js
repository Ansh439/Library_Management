import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  vendorId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  address: { type: String },
  serviceType: { type: String, required: true }, 
});

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;