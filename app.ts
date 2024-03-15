import express from 'express';
import routerUser from './routes/user.route';
import { dbConnection } from './db/dbConnection';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api/users', routerUser);

app.listen(PORT, async () => {
  try {
    console.log(`Server is running on http://localhost:${PORT}`);

    await dbConnection();
  } catch (error) {
    console.log(error);
  }
});
