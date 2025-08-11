const mongoose = require('mongoose')

const directorSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a director name']
    },
    dob: Date,
    bio: String
})

module.exports = mongoose.model('Director', directorSchema)