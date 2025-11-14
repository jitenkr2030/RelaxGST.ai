const express = require('express');
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile
} = require('../controllers/userController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorize('admin'), getUsers);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/:id')
  .get(protect, authorize('admin'), getUser)
  .put(protect, authorize('admin'), updateUser)
  .delete(protect, authorize('admin'), deleteUser);

module.exports = router;