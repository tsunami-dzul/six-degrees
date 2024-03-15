const mongoose = require('mongoose');

export const dbConnection = async () => {
  const DB_URL_CON = process.env.DB_STR_CONN || 'mongodb://mongo:27017/todo_express';

  try {
    await mongoose.connect(DB_URL_CON);

    console.log('Connection to the db was successfull');
  } catch (error) {
    throw error;
  }
};
