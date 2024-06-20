const express = require('express');
const { getReports, getReport, createReport } = require('../controllers/reportingController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getReports).post(protect, createReport);
router.route('/:id').get(protect, getReport);

module.exports = router;
