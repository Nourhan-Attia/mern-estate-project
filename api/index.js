import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO).then(()=>console.log(`connected to mongo`)).catch((err)=>console.log(err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}!`));
