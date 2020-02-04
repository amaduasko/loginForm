import {
  CHANGE_INPUT_FIELD,
  CHANGE_PASSWORD_FIELD,
  UPDATE_CHECKBOX_STATUS,
  GET_FORM_VALUE
} from "./constants";

export const setInputField = (text: string) => ({
  type: CHANGE_INPUT_FIELD,
  payload: text
});
export const setPasswordField = (text: string) => ({
  type: CHANGE_PASSWORD_FIELD,
  payload: text
});
export const setCheckBoxStatus = (status: boolean) => ({
  type: UPDATE_CHECKBOX_STATUS,
  payload: status
});
export const getFormValue = (value: object) => ({
  type: GET_FORM_VALUE,
  payload: value
});
