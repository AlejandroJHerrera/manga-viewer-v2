import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    mal_id: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model('Comment', CommentSchema);
