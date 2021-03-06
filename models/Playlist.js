const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist; 
