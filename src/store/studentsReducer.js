import { LOAD_STUDENTS_SUCCESS, DELETE_STUDENT, ADD_NEW_STUDENT } from './actions';

export const studentsReducer = (students = '', action) => {
  switch (action.type) {
    case LOAD_STUDENTS_SUCCESS:
      return action.students;

    case DELETE_STUDENT:
      return students.filter(student => student._id !== action.id);

    case ADD_NEW_STUDENT:
      return [
        {
          name: action.name,
          email: action.email,
          isActive: action.isActive,
          course: action.course,
          _id: action.id
        },
        ...students,
      ];

    default:
      return students;
  }
};
