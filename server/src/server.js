import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

export const startServer = () => {
  const app = express();
  app.use(pino({ autoLogging: false }));
  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res, next) => {
    res.send('Hello world Ruslan');
  });

  app.use((req, res) => {
    res.status(404).send('Opps rout is not found');
  });

  app.use((error, req, res, next) => {
    res.status(500).send(error.message);
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};
