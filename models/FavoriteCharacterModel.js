import mongoose from 'mongoose';

const FavoriteCharacterSchema = new mongoose.Schema(
  {
    id: Number
  },
  { timestamps: true }
);

export default mongoose.model('FavoriteCharacter', FavoriteCharacterSchema);