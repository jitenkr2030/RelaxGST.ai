const asyncHandler = require('express-async-handler');
const Report = require('../models/Report');

// @desc    Get all reports
// @route   GET /api/reports
// @access  Private
const getReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ user: req.user.id });
  res.json(reports);
});

// @desc    Create a new report
// @route   POST /api/reports
// @access  Private
const createReport = asyncHandler(async (req, res) => {
  const { type, data } = req.body;

  const report = new Report({
    user: req.user.id,
    type,
    data,
  });

  const createdReport = await report.save();
  res.status(201).json(createdReport);
});

module.exports = { getReports, createReport };
