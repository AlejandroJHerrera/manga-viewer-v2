import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    birthday: { type: Date },
    gender: { type: String },
    about: { type: String },
    commentsCount: { type: Number },
    favoritesCount: { type: Number },
    likesGivenCount: { type: Number },
    avatar: { type: String },
    language: { type: String },
    country: { type: String },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { strictQuery: false }
);

export default mongoose.model('User', UserSchema);
