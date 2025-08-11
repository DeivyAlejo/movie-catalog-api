const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
})

module.exports = mongoose.model('Genre', genreSchema)