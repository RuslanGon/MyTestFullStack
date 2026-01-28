import { getAllStudents, getStudentById } from "../services/students.js";

export const getAllStudentsController = async (req, res, next) => {
  const students = await getAllStudents();
  res.json({
    status: 200,
    message: 'Get all students',
    data: students,
  });
};

export const getStudenByIdController = async (req, res, next) => {
    const { studentId } = req.params;
    const student = await getStudentById(studentId);
    if (!student) {
      return res.status(404).json({
        status: 404,
        message: 'Student not found',
      });
    }

    res.json({
      status: 200,
      message: 'Get student by Id',
      data: student,
    });
  };
