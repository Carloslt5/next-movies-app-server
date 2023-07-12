const router = require("express").Router()
const { getAllMovies, getOneMovie } = require('../controllers/movies.controllers.js')

router.get('/', getAllMovies)
router.get('/:id', getOneMovie)


module.exports = router