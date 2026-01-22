import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddleware } from './middlewars/notFoundMiddleware.js';


export const startServer = () => {
  const app = express();
  app.use(pino({ autoLogging: false }));
  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res, next) => {
    res.send('Hello world Ruslan');
  });

  app.use(notFoundMiddleware);

  app.use((error, req, res, next) => {
    res.status(500).send(error.message);
  });

const PORT = env(ENV_VARS.PORT);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
