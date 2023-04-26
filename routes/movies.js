var express = require('express');
var router = express.Router();

const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

router.get('/all-movies', (req, res, next) => {

    Movie.find()
        .then((movies) => {

            res.render('movies/movies.hbs', { movies })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/add-movie', (req, res, next) => {

    Celebrity.find()
        .then((celebrities) => {

            res.render('movies/new-movie.hbs', { celebrities })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/add-movie', (req, res, next) => {

    let { title, genre, plot, cast } = req.body

    Movie.create({
        title,
        genre,
        plot,
        cast
    })
        .then((createdMovie) => {
            console.log("Created movie", createdMovie)
            res.redirect('/movies/all-movies')
        })
        .catch((err) => {
            console.log(err)
        })

})

router.get("/movie-details/:id", (req, res) => {
    const { id } = req.params
    Movie.findById(id)
        .populate("cast")
        .then((movie) => {
            res.render("movies/movie-details.hbs", movie);
        }).catch((err) => {
            console.log(err)
        })
});

router.get('/delete/:id', (req, res, next) => {
    const { id } = req.params
    Movie.findByIdAndDelete(id)
        .then((movie) => {
            res.redirect('/movies/all-movies')
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;
