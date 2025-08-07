const mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    description: String,
    releaseYear: Number,
    createdAt: {
        type:Date,
        default:Date.now
    },
    director: [{type: mongoose.Schema.Types.ObjectId, ref:'Director'}]

})

module.exports = mongoose.model('Movies',moviesSchema)