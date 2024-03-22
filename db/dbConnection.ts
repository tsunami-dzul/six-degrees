const mongoose = require('mongoose');

export const dbConnection = async () => {
  const DB_URL_CON = process.env.DB_STR_CONN || 'mongodb://localhost:27017';

  try {
    await mongoose.connect(DB_URL_CON);

    console.log('Connection to the db was successfull');
  } catch (error) {
    throw error;
  }
};
