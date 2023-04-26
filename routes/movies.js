var express = require('express');
var router = express.Router();

router.get('/all-movies', (req, res, next) => {
    res.render('movies/movies.hbs')
})

router.get('/add-movie', (req, res, next) => {
    res.render('movies/new-movie.hbs')
})

module.exports = router;