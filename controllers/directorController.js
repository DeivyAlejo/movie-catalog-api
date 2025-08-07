const asyncHandler = require('express-async-handler')
const Director = require('../models/directorModel')

// @des     Get directors
// @route   GET /api/directors
// @access  Public
const getDirectors = asyncHandler(async (req, res) => {
    const directors = await Director.find()

    res.status(200).json(directors)
})

const setDirector = asyncHandler(async (req, res) =>{

    if(!req.body){
        res.status(400)
        throw new Error('Please add information to the movie')
    }    
    else if(!req.body.name){
        res.status(400)
        throw new Error('Please add a name')
    }
    const director = await Director.create({
        name: req.body.name,
        dob: req.body.dob,
        bio: req.body.bio,
        movies: req.body.movies
    })
    res.status(200).json(director)
})


module.exports = {
    getDirectors,
    setDirector,

}