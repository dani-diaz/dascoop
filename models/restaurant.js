const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    match: /.{5,}/
  },
  rating: {
    type: String,
  },
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  userName: String,
  userAvatar: String
}, {

  timestamps: true
});

const restaurantSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  restLocation: {
    type: String,
    required: true
  },
  restWeb: {
    type: String,
    required: true
  },

  foodType: {
    type: String,
    enum: ['American', 'Italian', 'Asian', 'Latin', 'Fast Food', 'Unknown']
  },

  reviews: [reviewSchema]
}, {

  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);