import { Router } from 'express';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { loginUserController, logoutController, registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewars/validateBody.js';
import { registerStudentSchema } from '../validation/registerSchema.js';
import { loginStudentSchema } from '../validation/loginSchema.js';

const authRouter = Router();

authRouter.post('/register',validateBody(registerStudentSchema),ctrlWrapper(registerUserController));

authRouter.post('/login',validateBody(loginStudentSchema), ctrlWrapper(loginUserController));
// authRouter.post('/refresh-token');

authRouter.post('/logout', ctrlWrapper(logoutController));



export default authRouter;
