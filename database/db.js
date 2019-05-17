const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/trekbikes', { useNewUrlParser: true });

const db = mongoose.connection;

const { Schema } = mongoose;

const colorSchema = new Schema({
  name: String,
  finish: String,
  rgb: [Number],
  quantityInInventory: Map,
  of: String,
});

const productSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  colors: [colorSchema],
  reviewAverage: Number,
  releaseDate: Date,
});

const Color = mongoose.model('Color', colorSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { Product, Color, db };
