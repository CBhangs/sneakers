const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    rating: Number
})
const Sneaker = mongoose.model('Sneaker', sneakerSchema)

module.exports = Sneaker;