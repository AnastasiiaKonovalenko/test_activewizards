import { CHANGE_QUERY_STUDENT } from './actions';

export const queryStudentsReducer = (queryStudent = '', action) => {
  if (action.type === CHANGE_QUERY_STUDENT) {
    return action.queryStudent;
  } else {
    return queryStudent;
  }
};
