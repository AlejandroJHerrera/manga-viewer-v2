import express from 'express';
import {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} from '../controllers/commentController.js';

const router = express.Router();

// Add comment and return updated list
router.post('/:id', addComment);

// Get all coments for single manga
router.get('/:id', getComments);

// Update comment
router.put('/:mal_id/:id', updateComment);

// Delete comment
router.delete('/:mal_id/:id', deleteComment);

export default router;
