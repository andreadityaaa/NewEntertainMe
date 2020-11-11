const tvSeries = require('../models/TvSeries')

class TvSeriesController {
  static async showAll (req, res) {
    const allSeries = await tvSeries.showAll()
    const displaySeries = allSeries.filter(series => series._id != null)
    return res.status(200).json(displaySeries)
  }

  static async findOne (req, res) {
    const series = await tvSeries.findOne(req.params.id)
    return res.status(200).json(series)
  }

  static async add (req, res) {
    const newOne = { ... req.body}
    const addOne = await tvSeries.add(newOne)
    return res.status(201).json(addOne.ops[0])
  }

  static async update (req, res) {
    const updateData = { ... req.body}
    const doUpdate = await tvSeries.update(req.params.id, updateData)
    return res.status(200).json(doUpdate.value)
  }

  static async delete (req, res) {
    const doDelete = await tvSeries.delete(req.params.id)
    return res.status(200).json(doDelete.value)
  }
}

module.exports = TvSeriesController