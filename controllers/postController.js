const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Post = mongoose.model('Post')

// @CREATE_POST
exports.createPost = async (req, res) => {
  const post = await new Post(req.body).save()
  console.log('created post: ', post)
  res.end()
}

// @DELETE_POST
exports.deletePost = async (req, res) => {
  console.log(req.params.id)
  const post = await Post.findOne({ _id: req.params.id }).remove()
  console.log('deleted post: ', post)
  res.end()
}

// @FETCH_POST
exports.fetchPost = async (req, res) => {
  const post = await Post.findOne({ id: req.params.id })
  console.log('fetched post: ', post)
  res.send(post)
}

//  @FETCH_POSTS
exports.fetchPosts = async (req, res) => {
  const postsPromise = Post.find()
  const countPromise = Post.count()
  const [posts, count] = await Promise.all([postsPromise, countPromise])
  console.log('posts: ', posts, 'count', count)
  return res.json(posts)
}

// @UPDATE_POST
