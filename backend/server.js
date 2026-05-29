import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userLogin from './routes/user.js';
import donation from './routes/donation.js';

dotenv.config();

const app = express();

app.use(express.json());

// ✅ CORS CONFIG (deployment-ready)
const allowedOrigin = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

app.use('/user', userLogin);
app.use('/donation', donation);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});