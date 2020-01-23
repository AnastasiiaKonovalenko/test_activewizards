import { CHANGE_QUERY_COURSE } from './actions';

export const queryCoursesReducer = (queryCourse = '', action) => {
  if (action.type === CHANGE_QUERY_COURSE) {
    return action.queryCourse;
  } else {
    return queryCourse;
  }
};
