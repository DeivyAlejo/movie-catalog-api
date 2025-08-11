const asyncHandler = require('express-async-handler')
const Genre = require('../models/genreModel')

// @desc    Get genres
// @route   GET /api/genres
// @access  Public
const getGenres = asyncHandler(async (req, res) => {
    const genres = await Genre.find()

    res.status(200).json(genres)
})

// @desc    Set genre
// @route   POST /api/genres
// @access  Public
const setGenre = asyncHandler(async (req, res) => {
if(!req.body){
    res.status(400)
    throw new Error('Please add information to the genre')
}    
else if(!req.body.name){
    res.status(400)
    throw new Error('Please add a name')
}

    const genre = await Genre.create({
        name: req.body.name
    })
    res.status(200).json(genre)
})

// @desc    Update genre
// @route   PUT /api/genres/:id
// @access  Public
const updateGenre = asyncHandler(async (req, res) => {
    const genre = await Genre.findById(req.params.id)

    if(!genre){
        res.status(400)
        throw new Error('Genre not found')
    }

    const updateGenre = await Genre.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedGenre)
})

// @desc    Delete genre
// @route   DELETE /api/genres/:id
// @access  Public
const deleteGenre = asyncHandler(async (req, res) => {
    const genre = await Genre.findById(req.params.id)

    if(!genre){
        res.status(400)
        throw new Error('Genre not found')
    }

    await Genre.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getGenres,
    setGenre,
    updateGenre,
    deleteGenre,
}