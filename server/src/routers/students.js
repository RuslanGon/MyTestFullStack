import { Router } from 'express';
import { createStudenController, deleteStudenController, getAllStudentsController, getStudenByIdController } from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/students', ctrlWrapper(getAllStudentsController));
studentsRouter.get('/students/:studentId', ctrlWrapper(getStudenByIdController));
studentsRouter.post('/students', ctrlWrapper(createStudenController));
studentsRouter.delete('/students/:studentId', ctrlWrapper(deleteStudenController));




export default studentsRouter;
