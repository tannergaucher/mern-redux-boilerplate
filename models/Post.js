const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//create Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String
  },
  categories: {
    type: String
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('Post', postSchema)
