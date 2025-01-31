// database.js
const mongoose = require('mongoose');
require('dotenv').config(); // To use the .env variables

const connectDB = async () => {
  try {
    // Access the connection string from the environment variable
    const dbURI = process.env.MONGODB_URI;

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Successfully connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Stop the app if the connection fails
  }
};

module.exports =connectDB;