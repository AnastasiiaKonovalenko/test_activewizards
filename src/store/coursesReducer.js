import {
  LOAD_COURSES_SUCCESS,
  DELETE_COURSE,
  ADD_NEW_COURSE,
  CLICK_BUTTON_EDIT,
  CLICK_BUTTON_EDIT_COURSE,
  CHANGE_STUDENT,
  CHANGE_COURSE,
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
          key: Math.random().toString(36).substr(2, 9),
        },
        ...courses,
      ];

    case DELETE_COURSE:
      return courses.filter(course => course.key !== action.id);

    case CLICK_BUTTON_EDIT_COURSE:
      return action.courses;

    case CHANGE_COURSE:
      return action.students;

    default:
      return courses;
  }
};
