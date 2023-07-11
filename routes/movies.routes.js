const router = require("express").Router()
const { getAllMovies } = require('../controllers/movies.controllers.js')

router.get('/getAllMovies', getAllMovies)


module.exports = router