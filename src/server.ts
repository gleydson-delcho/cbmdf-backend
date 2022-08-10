import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const port = process.env.SERVER_PORT || 4000;
const app = express();

app
  .use(express.json())
  .use(cors())
  .use(routes)
  .listen(port, () => {
    console.log(`Server is runing on port: ** http://localhost:${port}`)
  })