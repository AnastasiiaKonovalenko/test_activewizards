import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { studentsReducer } from './studentsReducer';
import { coursesReducer } from './coursesReducer';
import { queryCoursesReducer } from './queryCoursesReducer';
import { queryStudentsReducer } from './queryStudentsReducer';
import { isActiveFormReducer } from './isActiveFormReducer';
import { isActiveCoursesFormReducer } from './isActiveFormCoursesReduser';

const rootReducer =  combineReducers({
  students: studentsReducer,
  courses: coursesReducer,
  queryCourse: queryCoursesReducer,
  queryStudent: queryStudentsReducer,
  isActiveForm: isActiveFormReducer,
  isActiveFormCourses: isActiveCoursesFormReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
