const express = require('express')
const router = express.Router()
const {getDirectors, setDirector, updateDirector, deleteDirector} = require('../controllers/directorController')

module.exports = router

router.get('/', getDirectors)
router.post('/', setDirector)
router.put('/:id',updateDirector)
router.delete('/:id',deleteDirector)


