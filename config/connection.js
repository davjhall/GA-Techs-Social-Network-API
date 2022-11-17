const mongoose = require('mongoose');
const Sequelize = require('sequelize');


mongoose.connect('mongodb://127.0.0.1:27017/ga-techs-social-network-apiDB', {   // Wrap Mongoose around local connection to MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;