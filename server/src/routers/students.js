import { Router } from 'express';
import { getAllStudentsController, getStudenByIdController } from '../controllers/students.js';

const studentsRouter = Router();

studentsRouter.get('/students', getAllStudentsController );
studentsRouter.get('/students/:studentId', getStudenByIdController );

export default studentsRouter;
