const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

app.get('/test', (req, res) => {
  res.json('test OK');
});

app.use('/chatApp/v1/users', userRoutes);

module.exports = app;
