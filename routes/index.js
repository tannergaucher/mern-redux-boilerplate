const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

// @FETCH_POSTS || TYPE GET  || URL /posts
router.get('/posts', postController.fetchPosts)

// @CREATE_POST || TYPE POST || URL /posts
router.post('./posts', postController.createPost)

// @FETCH_POST || TYPE GET || URL /posts/:id
router.get('/posts/:id', postController.fetchPost)

//  @DELETE_POST || TYPE DELETE || URL /posts/:id
router.post('/post/:id', postController.deletePost)
module.exports = router
