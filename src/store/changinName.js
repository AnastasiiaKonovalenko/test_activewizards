import { CHANGE_NAME } from './actions';

export const changingNameReducer = (isNameInEditMode = false, action) => {
  if (action.type === CHANGE_NAME) {
    return !isNameInEditMode;
  } else {
    return isNameInEditMode;
  }
};
