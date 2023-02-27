import mongoose from 'mongoose';

const FavouriteSchema = new mongoose.Schema({
  mal_id: { type: Number },
  email: { type: String },
});

export default mongoose.model('Favourite', FavouriteSchema);
