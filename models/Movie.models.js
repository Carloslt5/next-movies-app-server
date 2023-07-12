
const { Schema, model } = require("mongoose");

const movieSchema = new Schema(

    {
        plot: {
            type: String
        },
        genres: [{
            type: String
        }],
        runtime: Number,
        cast: [{
            type: String
        }],
        num_mflix_comments: Number,
        title: {
            type: String
        },
        fullplot: {
            type: String
        },
        countries: [{
            type: String
        }],
        released: {
            $date: {
                $numberLong: {
                    type: String
                }
            }
        },
        directors: [{
            type: String
        }],
        rated: {
            type: String
        },
        awards: {
            wins: Number,
            nominations: Number,
            text: String
        },
        lastupdated: String,
        year: Number,
        imdb: {
            rating: Number,
            votes: Number,
            id: Number
        },
        type: String,
        tomatoes: {
            viewer: {
                rating: Number,
                numReviews: Number,
                meter: Number
            },
            lastUpdated: {
                $date: {
                    type: String
                }
            }
        }
    },
    {
        timestamps: true
    }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;

