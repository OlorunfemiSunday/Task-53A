const jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');

module.exports = (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) {
      throw new ApiError(401, 'No token provided');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    next(new ApiError(401, 'Invalid or expired token'));
  }
};