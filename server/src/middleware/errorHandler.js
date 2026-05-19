// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('[DCL Server] Unhandled error:', err);

  // Mongoose-specific errors
  if (err.name === 'MongoServerError' || err.name === 'MongooseError') {
    return res.status(500).json({
      success: false,
      error: 'Database error. Please try again later.',
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error',
  });
};

module.exports = errorHandler;
