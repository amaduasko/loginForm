import {
  CHANGE_INPUT_FIELD,
  CHANGE_PASSWORD_FIELD,
  UPDATE_CHECKBOX_STATUS,
  GET_FORM_VALUE
} from "./constants";
const initialState = {
  inputField: "",
  passwordField: "",
  checkBoxStatus: false,
  formValue: ""
};

export const changeInputField = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return { ...state, inputField: action.payload };

    default:
      return state;
  }
};
export const changePasswordField = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case CHANGE_PASSWORD_FIELD:
      return { ...state, passwordField: action.payload };

    default:
      return state;
  }
};
export const changeCheckBoxStatus = (
  state = initialState,
  action: any = {}
) => {
  switch (action.type) {
    case UPDATE_CHECKBOX_STATUS:
      return { ...state, checkBoxStatus: action.payload };

    default:
      return state;
  }
};
export const checkFormData = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case GET_FORM_VALUE:
      return { ...state, formValue: action.payload };
    default:
      return state;
  }
};
