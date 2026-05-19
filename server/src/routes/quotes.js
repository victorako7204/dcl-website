const express = require('express');
const router = express.Router();
const QuoteRequest = require('../models/QuoteRequest');

// POST /api/quotes - Create a new quote request
router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, company, equipmentType, standard, timeline, message } = req.body;

    // Basic input sanitization (strip HTML tags)
    const sanitize = (str) => {
      if (typeof str !== 'string') return '';
      return str.replace(/[<>]/g, '').trim();
    };

    const quoteData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      company: sanitize(company),
      equipmentType: sanitize(equipmentType),
      standard: sanitize(standard),
      timeline: sanitize(timeline),
      message: sanitize(message || ''),
    };

    const quote = new QuoteRequest(quoteData);
    await quote.validate();
    await quote.save();

    res.status(201).json({
      success: true,
      message:
        'Quote request submitted successfully. Our engineering team will contact you within 24-48 hours.',
      data: { id: quote._id },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, errors });
    }
    next(error);
  }
});

// GET /api/quotes - List all quote requests (admin placeholder)
router.get('/', async (req, res, next) => {
  try {
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: quotes.length, data: quotes });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
