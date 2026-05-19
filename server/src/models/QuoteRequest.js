const mongoose = require('mongoose');

const quoteRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\d\s\-\+\(\)]{7,20}$/, 'Please enter a valid phone number'],
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    minlength: [2, 'Company name must be at least 2 characters'],
    maxlength: [200, 'Company name cannot exceed 200 characters'],
  },
  equipmentType: {
    type: String,
    required: [true, 'Equipment type is required'],
    trim: true,
    maxlength: [500, 'Equipment type description is too long'],
  },
  standard: {
    type: String,
    required: [true, 'Testing standard/code is required'],
    trim: true,
    maxlength: [500, 'Standard description is too long'],
  },
  timeline: {
    type: String,
    required: [true, 'Project timeline is required'],
    trim: true,
  },
  message: {
    type: String,
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters'],
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'contacted', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for faster queries
quoteRequestSchema.index({ createdAt: -1 });
quoteRequestSchema.index({ status: 1 });

module.exports = mongoose.model('QuoteRequest', quoteRequestSchema);
