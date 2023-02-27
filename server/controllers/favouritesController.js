import Favourite from '../models/favouritesModel.js';

export const getAllFavourite = async (req, res, next) => {
  try {
    const allFav = await Favourite.find({});
    res.status(200).json(allFav);
  } catch (error) {
    next(error);
  }
};

export const addFav = async (req, res, next) => {
  const newFav = new Favourite(req.body);
  try {
    await newFav.save();
    res.status(200).json('Like saved!');
  } catch (error) {
    next(error);
  }
};

export const getFavsManga = async (req, res, next) => {
  const mal_id = req.params.id;
  try {
    const favsManga = await Favourite.find({ mal_id: mal_id });
    res.status(200).json(favsManga);
  } catch (error) {
    next(error);
  }
};

export const getFavsUser = async (req, res, next) => {
  const email = req.params.email;
  try {
    const favsUser = await Favourite.find({ email: email });
    res.status(200).json(favsUser);
  } catch (error) {
    next(error);
  }
};

export const delFav = async (req, res, next) => {
  const userEmail = req.body.email;
  try {
    const deleted = await Favourite.findOneAndDelete({ email: userEmail });
    res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
};
