import {
  LOAD_COURSES_SUCCESS,
  DELETE_COURSE,
  ADD_NEW_COURSE,
} from './actions';

export const coursesReducer = (courses = '', action) => {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case ADD_NEW_COURSE:
      return [
        {
          course: action.course,
          course_id: action.id,
        },
        ...courses,
      ];
    case DELETE_COURSE:
      return courses.filter(course => course.course_id !== action.id);
    default:
      return courses;
  }
};
