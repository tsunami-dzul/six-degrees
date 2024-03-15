const mongoose = require('mongoose');

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_STR_CONN);

    console.log('Connection to the db was successfull');
  } catch (error) {
    throw error;
  }
};
