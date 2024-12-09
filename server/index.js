import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const userRoutes = require('./routes/userRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const adminRoutes = require('./routes/adminRoutes');    

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Mongoose is connected!");
    
})
.catch((err) => {
    console.log(err);
    
})

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
