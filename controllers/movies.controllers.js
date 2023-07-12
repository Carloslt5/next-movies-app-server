const Movie = require("../models/Movie.models")


const getAllMovies = async (req, res, next) => {

    try {
        const movie = await Movie.find().limit(10).sort({ title: 1 })
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
    getAllMovies,
    getOneMovie
}

