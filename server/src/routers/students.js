import { Router } from 'express';
import { createStudentController, deleteStudentController, getAllStudentsController, getStudentByIdController, patchStudentController, putStudentController } from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { validateMongoId } from '../middlewars/validateMongoId.js';
import { validateBody } from '../middlewars/validateBody.js';
import { createStudentSchema } from '../validation/createStudentSchema.js';
import { patchStudentSchema } from '../validation/patchStudentSchema.js';

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(getAllStudentsController));

studentsRouter.get('/:studentId',
  validateMongoId('studentId'),
  ctrlWrapper(getStudentByIdController),
);
studentsRouter.post('/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);
studentsRouter.delete('/:studentId',
  validateMongoId('studentId'),
  ctrlWrapper(deleteStudentController),
);
studentsRouter.patch('/:studentId',
validateBody(patchStudentSchema),
  validateMongoId('studentId'),
  ctrlWrapper(patchStudentController),
);
studentsRouter.put('/:studentId',
  validateBody(createStudentSchema),
  validateMongoId('studentId'),
  ctrlWrapper(putStudentController),
);






export default studentsRouter;
