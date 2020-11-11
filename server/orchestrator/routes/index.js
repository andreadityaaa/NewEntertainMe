const router = require('express').Router()
const TvSeriesController = require('../controllers/tvSeriesController')
const MoviesController = require('../controllers/moviesController')
const mainController = require('../controllers/mainController')

router.get('/tvSeries', TvSeriesController.showAll)
router.get('/tvSeries/:id', TvSeriesController.findOne)
router.post('/tvSeries', TvSeriesController.add)
router.put('/tvSeries/:id', TvSeriesController.update)
router.delete('/tvSeries/:id', TvSeriesController.delete)

router.get('/movies', MoviesController.showAll)
router.get('/movies/:id', MoviesController.findOne)
router.post('/movies', MoviesController.add)
router.put('/movies/:id', MoviesController.update)
router.delete('/movies/:id', MoviesController.delete)

router.get('/', mainController.showAll)

module.exports = router