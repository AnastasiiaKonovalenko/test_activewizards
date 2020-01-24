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

let initState = {};

const persistedState = localStorage.getItem('reduxState')
if (persistedState) {
  initState = JSON.parse(persistedState)
}
export const store = createStore(rootReducer,initState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});
