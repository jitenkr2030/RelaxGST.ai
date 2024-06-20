const Report = require('../models/Report');

const fetchReports = async () => {
  return await Report.find({});
};

const fetchReport = async (id) => {
  return await Report.findById(id);
};

const createReport = async (reportData) => {
  const report = new Report(reportData);
  return await report.save();
};

module.exports = { fetchReports, fetchReport, createReport };
