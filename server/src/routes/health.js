const express = require('express');
const router = express.Router();

// GET /api/health - Server health check
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

module.exports = router;
