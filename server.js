import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import { validateTest } from './middleware/validationMiddleware.js';
import cookieParser from 'cookie-parser';


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());

// Routes

import characterRouter from './routes/characterRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// Middleware

import { authenticateUser } from './middleware/authMiddleware.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1', authenticateUser, characterRouter);
app.use('/api/v1/users', authenticateUser, userRouter);

// 404 response

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found on our server!' });
});

// error middleware

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode).json({ msg: err.message });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}