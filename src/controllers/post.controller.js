const Post = require('../models/Post');
const ApiError = require('../utils/ApiError');

exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) throw new ApiError(400, 'Title and content are required');

    const post = await Post.create({
      title,
      content,
      author: req.user.id,
    });

    res.status(201).json({ status: 'success', data: { post } });
  } catch (err) {
    next(err);
  }
};