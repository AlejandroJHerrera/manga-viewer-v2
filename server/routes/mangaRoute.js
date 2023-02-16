import express from 'express';
import { getAllMangas } from '../controllers/mangaController.js';

const router = express.Router();

//Get All Manga
router.get('/', getAllMangas);

export default router;
