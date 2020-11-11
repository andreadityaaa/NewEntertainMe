const router = require('express').Router()
const MoviesController = require('../controllers/controller')

router.get('/', MoviesController.showAll)
router.get('/:id', MoviesController.findOne)
router.post('/', MoviesController.add)
router.put('/:id', MoviesController.update)
router.delete('/:id', MoviesController.delete)

module.exports = router