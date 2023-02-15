import express from 'express';
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUser,
} from '../controllers/userController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Update user info
router.put('/:id', verifyUser, updateUser);
// Delete a user
router.delete('/:id', verifyUser, deleteUser);
// Get single user
router.get('/:id', verifyUser, getUser);
// Get all users
router.get('/getAllUser', getAllUser);

export default router;
