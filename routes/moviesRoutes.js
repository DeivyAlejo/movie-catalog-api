const express = require('express')
const router = express.Router()
const {getMovies, setMovie, updateMovie, deleteMovie} = require('../controllers/moviesController')

module.exports = router

// I can do this as well
// router.route('/').get(getMovies).post(setMovie)
// router.route('/:id').put(updateMovie).delete(deleteMovie)

router.get('/', getMovies)   

router.post('/', setMovie)  

router.put('/:id', updateMovie)  

router.delete('/:id', deleteMovie) 