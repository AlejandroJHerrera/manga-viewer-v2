import express from 'express';
import {
  getAllMangas,
  getSingleManga,
} from '../controllers/mangaController.js';

const router = express.Router();

//Get All Manga
router.get('/', getAllMangas);

//Get Single Item
router.get('/single/:id', getSingleManga);

export default router;
