import { Router } from 'express';
import { createStudenController, getAllStudentsController, getStudenByIdController } from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/students', ctrlWrapper(getAllStudentsController));
studentsRouter.get('/students/:studentId', ctrlWrapper(getStudenByIdController));
studentsRouter.post('/students', ctrlWrapper(createStudenController));


export default studentsRouter;
