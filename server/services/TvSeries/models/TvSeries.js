const db = require('../config/config')
const { ObjectId } = require('mongodb')
const TvSeriesColls = db.collection("TvSeries") 

class TvSeries {
  static showAll () {
    return TvSeriesColls.find().toArray()
  }

  static findOne (id) {
    return TvSeriesColls.findOne({ "_id": ObjectId(id)})
  }

  static add (newOne) {
    return TvSeriesColls.insertOne(newOne)
  }

  static async update (id, newData) {
    return TvSeriesColls.findOneAndUpdate({ "_id": ObjectId(id)}, { $set: newData}, {returnOriginal: false})
  }

  static async delete (id) {
    return TvSeriesColls.findOneAndDelete({ "_id": ObjectId(id) })
  }
}

module.exports = TvSeries