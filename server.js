const express = require('express')
const mongoose = require('mongoose')
const authrouter = require('./authRouter')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/auth', authrouter)

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://userapimongo:userAPI_mongo@cluster0.y0wjj.mongodb.net/mongodbapitest?retryWrites=true&w=majority')
    app.listen(port, () => console.log(`server is starting on ${port} port`) )
  } catch (err) {
    throw err
  }
}

start()