const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
    picture: String,
    name: String,
    description: String,
    price: Number
})
const sneaker = mongoose.model('Sneaker', sneakerSchema)

module.exports = Sneaker;