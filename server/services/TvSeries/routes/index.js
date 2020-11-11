const router = require('express').Router()
const TvSeriesController = require('../controllers/controller')

router.get('/', TvSeriesController.showAll)
router.get('/:id', TvSeriesController.findOne)
router.post('/', TvSeriesController.add)
router.put('/:id', TvSeriesController.update)
router.delete('/:id', TvSeriesController.delete)

module.exports = router