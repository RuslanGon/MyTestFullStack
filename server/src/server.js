import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddleware } from './middlewars/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewars/errorHandlerMiddleware.js';
import studentsRouter from './routers/students.js';
import authRouter from './routers/auth.js';


export const startServer = () => {
  const app = express();
  app.use(pino({ autoLogging: false }));
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use('/students', studentsRouter);
  app.use('/auth', authRouter);


  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

const PORT = env(ENV_VARS.PORT);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
