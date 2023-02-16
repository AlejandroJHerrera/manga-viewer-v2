import Manga from '../models/mangaModel.js';

export const getAllMangas = async (req, res, next) => {
  try {
    const allManga = await Manga.find({});
    res.status(200).json(allManga);
  } catch (error) {
    next(error);
  }
};
