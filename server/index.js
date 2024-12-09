import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
