import { Router } from 'express';

const authRouter = Router();

authRouter.post('/', (req, res) => {
    res.send({ message: "Auth route works!" });
  });

export default authRouter;
