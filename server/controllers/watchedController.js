import Watch from '../models/watchedModel.js';

export const getAllWatched = async (req, res, next) => {
  try {
    const allFav = await Watch.find({});
    res.status(200).json(allFav);
  } catch (error) {
    next(error);
  }
};

export const addToWatchList = async (req, res, next) => {
  const newItem = new Watch(req.body);
  try {
    await newItem.save();
    res.status(200).json('Item saved to list!');
  } catch (error) {
    next(error);
  }
};

export const getWatchedListUser = async (req, res, next) => {
  const email = req.params.email;
  try {
    const watchUser = await Watch.find({ email: email });
    res.status(200).json(watchUser);
  } catch (error) {
    next(error);
  }
};

export const delWatchList = async (req, res, next) => {
  const id = req.body.mal_id;
  try {
    const deleted = await Watch.findOneAndDelete({ mal_id: id });
    res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
};
