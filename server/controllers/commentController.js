import Comment from '../models/commentModel.js';

export const addComment = async (req, res, next) => {
  const mal_id = req.params.id;
  const newComment = new Comment(req.body);
  try {
    await newComment.save();
    const allComments = await Comment.find({ mal_id: mal_id });
    res.status(200).json(allComments);
  } catch (error) {
    next(error);
  }
};

export const getComments = async (req, res, next) => {
  const mal_id = req.params.id;

  try {
    const allComments = await Comment.find({ mal_id: mal_id });
    res.status(200).json(allComments);
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (req, res, next) => {
  const id = req.params.id;
  const mal_id = req.params.mal_id;
  try {
    await Comment.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    const allComments = await Comment.find({ mal_id: mal_id });
    res.status(200).json(allComments);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  const id = req.params.id;
  const mal_id = req.params.mal_id;
  try {
    await Comment.findByIdAndDelete(id, { $pull: req.params.id });
    const allComments = await Comment.find({ mal_id: mal_id });
    res.status(200).json(allComments);
  } catch (error) {
    next(error);
  }
};
