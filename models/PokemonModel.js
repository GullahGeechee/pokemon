const mongoose = require('mongoose')

// create schema - detailed bluprint 
const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    img: {
        type: String,
        required: true
    }

})
// create model
module.exports = mongoose.model('Pokemon', pokemonSchema)
