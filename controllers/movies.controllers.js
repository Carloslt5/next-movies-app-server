const Movie = require("../models/Movie.models")

const getMovies = async (req, res, next) => {

    let { limit, skip } = req.query
    limit = limit ?? 10
    skip = skip ?? 0

    try {
        const movie = await Movie.find().skip(skip).limit(limit).sort({ title: 1 })
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }

}

const getOneMovie = async (req, res, next) => {

    const { id } = req.params

    try {
        const movie = await Movie.findById(id)
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json({ success: false, error });
    }

}


module.exports = {
    getMovies,
    getOneMovie
}

