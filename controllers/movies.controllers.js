const Movie = require("../models/Movie.models")


const getAllMovies = async (req, res, next) => {
    Movie
        .find()
        .limit(1)
        .then(response => {
            console.log('datos', response)
        })
        .catch(err => {
            console.log(err)
        })

}


module.exports = {
    getAllMovies
}

