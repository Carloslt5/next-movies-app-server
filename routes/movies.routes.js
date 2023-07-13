const router = require("express").Router()
const { getMovies, getOneMovie } = require('../controllers/movies.controllers.js')

router.get('/', getMovies)
router.get('/:id', getOneMovie)


module.exports = router