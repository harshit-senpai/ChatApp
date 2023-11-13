const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('test', (req, res) => {
  res.json('test OK');
});

module.exports = app;
