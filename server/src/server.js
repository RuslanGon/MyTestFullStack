import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddleware } from './middlewars/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewars/errorHandlerMiddleware.js';
import { getAllStudents, getStudentById } from './services/students.js';

export const startServer = () => {
  const app = express();
  app.use(pino({ autoLogging: false }));
  app.use(express.json());
  app.use(cors());

  app.get('/students', async (req, res, next) => {
    const students = await getAllStudents();
    res.json({
      status: 200,
      message: 'Get all students',
      data: students,
    });
  });

  app.get('/students/:studentId', async (req, res, next) => {
    const { studentId } = req.params;
    const student = await getStudentById(studentId);
    if (!student) {
    return res.status(404).json({
    status: 404,
    message: 'Student not found',
    });
    }

    res.json({
    status: 200,
    message: 'Get student by Id',
    data: student,
    });
    });

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

const PORT = env(ENV_VARS.PORT);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
