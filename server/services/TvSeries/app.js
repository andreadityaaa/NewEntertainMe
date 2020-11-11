const express = require ('express')
const app = express()
const routes = require('./routes')
const PORT = 3002

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/tvSeries', routes)

app.listen(PORT , () => {
  console.log(`Server running on Port ${PORT}`)
})