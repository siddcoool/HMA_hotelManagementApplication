const mongoose = require('mongoose');
const redisConnection = require('../lib/redis');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URL

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
   // redisConnection.connect()
   //   .then(() => console.log('Redis Connected!'))
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
