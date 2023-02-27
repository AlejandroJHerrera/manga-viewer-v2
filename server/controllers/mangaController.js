import Manga from '../models/mangaModel.js';

export const getAllMangas = async (req, res, next) => {
  try {
    const allManga = await Manga.find({});
    res.status(200).json(allManga);
  } catch (error) {
    next(error);
  }
};

export const getSingleManga = async (req, res, next) => {
  let id = req.params.id;
  try {
    const manga = await Manga.find({ mal_id: id });
    res.status(200).json(manga);
  } catch (error) {
    next(error);
  }
};
