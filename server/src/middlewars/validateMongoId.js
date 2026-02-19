import createHttpError from 'http-errors';
import { Types } from 'mongoose';

export const validateMongoId = (idName = 'id') => (req, res, next) => {
  const id = req.params[idName];

  if (!id) {
    return next(createHttpError(400, `${idName} param is required`));
  }

  if (!Types.ObjectId.isValid(id)) {
    return next(createHttpError(400, `Invalid ${idName}`));
  }

  next();
};
