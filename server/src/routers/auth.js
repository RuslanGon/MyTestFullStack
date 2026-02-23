import { Router } from 'express';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewars/validateBody.js';
import { registerStudentSchema } from '../validation/registerSchema.js';

const authRouter = Router();

authRouter.post('/register',validateBody(registerStudentSchema),
 ctrlWrapper(registerUserController));
// authRouter.post('/login');
// authRouter.post('/refresh-token');
// authRouter.post('/logout');


export default authRouter;
