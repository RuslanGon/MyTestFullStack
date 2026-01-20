import express from 'express';
import pino from 'pino-http';

const app = express();
app.use(pino());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Hello world Ruslan');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
