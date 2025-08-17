const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middlewares
app.use(express.json());
if (process.env.NODE_ENV !== 'production') {
  try {
    app.use(morgan('dev'));
  } catch (_) {}
}

// Routes
app.use('/api', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

// Error handler
app.use(errorHandler);

module.exports = app;