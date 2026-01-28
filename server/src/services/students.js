import {Student} from '../db/models/student.js';

export const getAllStudents = async () => {
  return await Student.find({});
};

export const getStudentById = async (studentId) => {
  return await Student.findById(studentId);
    };
