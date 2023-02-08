import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('--Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('connected', () => {
  console.log('--MongoDB connected!');
});

mongoose.connection.on('disconnected', () => {
  console.log('++MongoDB disconnected!');
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 4000, () => {
  connect();
  console.log('--connected to Backend!');
});
