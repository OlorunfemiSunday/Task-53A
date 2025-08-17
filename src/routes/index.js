const express = require('express');
const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

router.use('/auth', require('./auth.routes'));
router.use('/posts', require('./post.routes'));

module.exports = router;