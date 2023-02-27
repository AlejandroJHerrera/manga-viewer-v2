import mongoose from 'mongoose';

const WatchSchema = new mongoose.Schema({
  mal_id: { type: Number },
  email: { type: String },
});

export default mongoose.model('Watch', WatchSchema);
