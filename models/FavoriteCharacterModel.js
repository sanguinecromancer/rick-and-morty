import mongoose from 'mongoose';

const FavoriteCharacterSchema = new mongoose.Schema(
  {
    id: Number,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

export default mongoose.model('FavoriteCharacter', FavoriteCharacterSchema);