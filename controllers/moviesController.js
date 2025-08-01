const asyncHandler = require('express-async-handler')
const Movies = require('../models/moviesModel')

// @desc    Get movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movies.find()

    res.status(200).json(movies)
})

// @desc    Set movie
// @route   POST /api/movies
// @access  Public
const setMovie = asyncHandler(async (req, res) => {
if(!req.body){
    res.status(400)
    throw new Error('Please add information to the movie')
}    
else if(!req.body.title){
    res.status(400)
    throw new Error('Please add a title')
}

    const movie = await Movies.create({
        title: req.body.title,
        decription: req.body.description,
        releaseYear: req.body.releaseYear
    })
    res.status(200).json(movie)
})

// @desc    Update movie
// @route   PUT /api/movies/:id
// @access  Public
const updateMovie = asyncHandler(async (req, res) => {
    const movie = await Movies.findById(req.params.id)

    if(!movie){
        res.status(400)
        throw new Error('Movie not found')
    }

    const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedMovie)
})

// @desc    Delete movie
// @route   DELETE /api/movies/:id
// @access  Public
const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movies.findById(req.params.id)

    if(!movie){
        res.status(400)
        throw new Error('Movie not found')
    }

    await Movies.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getMovies,
    setMovie,
    updateMovie,
    deleteMovie,
}