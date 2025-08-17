const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postController = require('../controllers/post.controller');

router.post('/', auth, postController.createPost);

module.exports = router;