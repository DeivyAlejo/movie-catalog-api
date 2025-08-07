const asyncHandler = require('express-async-handler')
const Director = require('../models/directorModel')

// @des     Get directors
// @route   GET /api/directors
// @access  Public
const getDirectors = asyncHandler(async (req, res) => {
    const directors = await Director.find()

    res.status(200).json(directors)
})

// @des     Set director
// @route   POST /api/directors
// @access  Public
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

// @des     Update directors
// @route   PUT /api/directors/:id
// @access  Public
const updateDirector = asyncHandler(async(req, res) =>{
    const director = await Director.findById(req.params.id)

    if(!director){
        res.status(400)
        throw new Error('Director not found')
    }

    const updatedDirector = await Director.findByIdAndUpdate(req.params.id, req.body, {new:true})
    
    res.status(200).json(updatedDirector)
})

// @des     Delete directors
// @route   DELETE /api/directors/:id
// @access  Public
const deleteDirector = asyncHandler(async (req, res) => {
    const director = await Director.findById(req.params.id)

    if(!director){
        res.status(400)
        throw new Error('Director not found')
    }

    await Director.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getDirectors,
    setDirector,
    updateDirector,
    deleteDirector
}