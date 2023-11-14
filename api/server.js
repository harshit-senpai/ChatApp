const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config/config.env' });

const DB = process.env.DATABASE_NAME.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Conncection to Database established Successfully...');
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
