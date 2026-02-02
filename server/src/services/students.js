import createHttpError from 'http-errors';
import {Student} from '../db/models/student.js';

export const getAllStudents = async () => {
  return await Student.find({});
};

export const getStudentById = async (studentId) => {
  const student = await Student.findById(studentId);
  if (!student){
    throw createHttpError(404, 'Student not found by id');
  }
  return student;
};
