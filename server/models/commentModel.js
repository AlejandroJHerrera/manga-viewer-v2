import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    mal_id: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Comment', CommentSchema);
