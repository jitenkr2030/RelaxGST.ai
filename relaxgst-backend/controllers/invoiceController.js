const asyncHandler = require('express-async-handler');
const Invoice = require('../models/Invoice');

// @desc    Get all invoices
// @route   GET /api/invoices
// @access  Private
const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({ user: req.user.id });
  res.json(invoices);
});

// @desc    Create new invoice
// @route   POST /api/invoices
// @access  Private
const createInvoice = asyncHandler(async (req, res) => {
  const { items, total } = req.body;

  const invoice = new Invoice({
    user: req.user.id,
    items,
    total,
  });

  const createdInvoice = await invoice.save();
  res.status(201).json(createdInvoice);
});

module.exports = { getInvoices, createInvoice };
