import mongoose from 'mongoose';

const { Schema } = mongoose;

const ListingSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  passenger: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Listing = mongoose.models.Listing || mongoose.model('Listing', ListingSchema);

export default Listing;
