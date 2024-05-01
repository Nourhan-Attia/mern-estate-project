import cookieParser from "cookie-parser";
import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_2)
  .then(() => console.log(`connected to mongo`))
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}!`));
  })
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
