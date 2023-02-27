import express from 'express';
import {
  addFav,
  delFav,
  getAllFavourite,
  getFavsManga,
  getFavsUser,
} from '../controllers/favouritesController.js';

const router = express.Router();

//Get All Favs
router.get('/', getAllFavourite);

//Add fav
router.post('/', addFav);

//Delete fav
router.delete('/', delFav);

//Get all favs for single manga

router.get('/:id', getFavsManga);

//Get all favs for signle user
router.get('/user/:email', getFavsUser);

export default router;
