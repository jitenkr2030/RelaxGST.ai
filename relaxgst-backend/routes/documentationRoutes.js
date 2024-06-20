const express = require('express');
const { getDocuments, getDocument, createDocument } = require('../controllers/documentationController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getDocuments).post(protect, createDocument);
router.route('/:id').get(protect, getDocument);

module.exports = router;
