import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddleware } from './middlewars/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewars/errorHandlerMiddleware.js';
import studentsRouter from './routers/students.js';


export const startServer = () => {
  const app = express();
  app.use(pino({ autoLogging: false }));
  app.use(express.json());
  app.use(cors());
  app.use(express.json());

  app.use('/students', studentsRouter);


  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

const PORT = env(ENV_VARS.PORT);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
