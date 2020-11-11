const express = require ('express')
const app = express()
const routes = require('./routes')
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/movies',routes)

app.listen(PORT , () => {
  console.log(`Server running on Port ${PORT}`)
})