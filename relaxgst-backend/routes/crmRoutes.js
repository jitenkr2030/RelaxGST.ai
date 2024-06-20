const express = require('express');
const { getCRMRecords, createCRMRecord } = require('../controllers/crmController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getCRMRecords)
  .post(protect, createCRMRecord);

module.exports = router;
