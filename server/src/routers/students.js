import { Router } from 'express';
import { createStudenController, deleteStudenController, getAllStudentsController, getStudenByIdController, upsertStudentController } from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(getAllStudentsController));
studentsRouter.get('/:studentId', ctrlWrapper(getStudenByIdController));
studentsRouter.post('/', ctrlWrapper(createStudenController));
studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudenController));
studentsRouter.patch('/:studentId', ctrlWrapper(upsertStudentController));





export default studentsRouter;
