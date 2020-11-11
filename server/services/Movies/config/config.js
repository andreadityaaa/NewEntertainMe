const { MongoClient } = require('mongodb')

const dbName = 'EntertainMe'
const url = 'mongodb://127.0.0.1:27017/'

const client = new MongoClient(url, {useUnifiedTopology: true})
client.connect()

const db = client.db(dbName)

module.exports = db