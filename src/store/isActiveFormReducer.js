import { FORM_IS_ACTIVE } from '../store/actions';

export const isActiveFormReducer = (
  isActiveForm = false, action
) => {
  if (action.type === FORM_IS_ACTIVE) {
    return !isActiveForm;
  } else {
    return isActiveForm;
  }
};
