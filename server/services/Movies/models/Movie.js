const db = require('../config/config')
const { ObjectId } = require('mongodb')
const MovieColls = db.collection("Movies") 

class Movie {
  static showAll () {
    return MovieColls.find().toArray()
  }
  
  static findOne (id) {
    return MovieColls.findOne({ "_id": ObjectId(id)})
  }

  static addOne (newOne) {
    return MovieColls.insertOne(newOne)
  }

  static async update (id, newData) {
    return MovieColls.findOneAndUpdate({ "_id": ObjectId(id)}, { $set: newData}, {returnOriginal: false})
  }

  static async delete (id) {
    return MovieColls.findOneAndDelete({ "_id": ObjectId(id) })
  }
}

module.exports = Movie