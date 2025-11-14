const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./utils/logger');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const crmRoutes = require('./routes/crmRoutes');
const bookkeepingRoutes = require('./routes/bookkeepingRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const documentationRoutes = require('./routes/documentationRoutes');
const ewayBillRoutes = require('./routes/ewayBillRoutes');
const gstReturnRoutes = require('./routes/gstReturnRoutes');
const reportingRoutes = require('./routes/reportingRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const usageRoutes = require('./routes/usageRoutes');
const workflowRoutes = require('./routes/workflowRoutes');

dotenv.config();
connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static('uploads'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/crm', crmRoutes);
app.use('/api/bookkeeping', bookkeepingRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/documentation', documentationRoutes);
app.use('/api/ewaybills', ewayBillRoutes);
app.use('/api/gst-returns', gstReturnRoutes);
app.use('/api/reporting', reportingRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/usage', usageRoutes);
app.use('/api/workflows', workflowRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  logger.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
