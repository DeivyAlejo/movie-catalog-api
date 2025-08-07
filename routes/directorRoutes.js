const express = require('express')
const router = express.Router()
const {getDirectors, setDirector} = require('../controllers/directorController')

module.exports = router

router.get('/', getDirectors)
router.post('/', setDirector)



