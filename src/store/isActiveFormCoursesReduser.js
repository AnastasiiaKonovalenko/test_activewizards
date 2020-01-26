import { FORM_COURSES_IS_ACTIVE } from '../store/actions';

export const isActiveCoursesFormReducer = (
  isActiveFormCourses = false, action
) => {
  if (action.type === FORM_COURSES_IS_ACTIVE) {
    return !isActiveFormCourses;
  } else {
    return isActiveFormCourses;
  }
};
