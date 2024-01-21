import { body, param, validationResult } from 'express-validator';
//import { BadRequestError } from '../errors/customErrors';
import mongoose from 'mongoose';



const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        return res.status(400).json({ errors: errorMessages });
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('name must be between 3 and 50 characters long')
    .trim(),
]);

export const validateIdParam = withValidationErrors([
    param('id')
      .custom(async (value) => mongoose.Types.ObjectId.isValid(value))
      .withMessage('invalid MongoDB id'),
  ]);

// export const validateIdParam = withValidationErrors([
// param('id').custom(async (value) => {
//     const isValidId = mongoose.Types.ObjectId.isValid(value);
//     if (!isValidId) return res.status(400).json({ errors: 'invalid MongoDB id' });
//     const job = await Job.findById(value);
//     if (!job) throw new NotFoundError(`no job with id : ${value}`);
// }),
// ]);