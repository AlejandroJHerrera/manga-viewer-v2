import express from 'express';
import {
  addToWatchList,
  delWatchList,
  getAllWatched,
  getWatchedListUser,
} from '../controllers/watchedController.js';

const router = express.Router();

//Get All Watch Lists
router.get('/', getAllWatched);

//Add Item to Watch List
router.post('/', addToWatchList);

//Delete Item from Watch List
router.delete('/item/', delWatchList);

//Get all items form a single user Watch List
router.get('/:email', getWatchedListUser);

export default router;
