const asyncHandler = require('express-async-handler');
const Document = require('../models/Document');

// @desc    Get all documents
// @route   GET /api/documents
// @access  Private
const getDocuments = asyncHandler(async (req, res) => {
  const documents = await Document.find({ user: req.user.id });
  res.json(documents);
});

// @desc    Upload a new document
// @route   POST /api/documents
// @access  Private
const createDocument = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const document = new Document({
    user: req.user.id,
    title,
    content,
  });

  const createdDocument = await document.save();
  res.status(201).json(createdDocument);
});

module.exports = { getDocuments, createDocument };
