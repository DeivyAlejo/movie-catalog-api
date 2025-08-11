const express = require('express')
const router = express.Router()
const {getGenres,setGenre,updateGenre,deleteGenre} = require('../controllers/genresController')

module.exports = router

router.get('/', getGenres)
router.post('/', setGenre)
router.put('/:id',updateGenre)
router.delete('/:id',deleteGenre)