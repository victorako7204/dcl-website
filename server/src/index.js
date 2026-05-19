require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const quoteRoutes = require('./routes/quotes');
const healthRoutes = require('./routes/health');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dcl_website';

// Security middleware
app.use(helmet());

// CORS configuration for React dev server
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Rate limiting (100 requests per 15 minutes per IP)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);

// Body parsing with size limits
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Mount routes
app.use('/api/quotes', quoteRoutes);
app.use('/api/health', healthRoutes);

// Global error handling middleware
app.use(errorHandler);

// Connect to MongoDB and start server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('[DCL Server] Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`[DCL Server] Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('[DCL Server] MongoDB connection error:', err);
    // Still start server without DB for dev purposes
    app.listen(PORT, () => {
      console.log(`[DCL Server] Running on port ${PORT} (DB connection failed)`);
    });
  });

module.exports = app;
