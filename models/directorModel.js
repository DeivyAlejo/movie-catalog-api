const mongoose = require('mongoose')

const directorSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'Please add a director name']
    },
    dob: Date,
    bio: String,
    movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movies'}]
})

module.exports = mongoose.model('Director', directorSchema)