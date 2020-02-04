import { createStore, combineReducers } from "redux";
import {
  changeInputField,
  changePasswordField,
  changeCheckBoxStatus,
  checkFormData
} from "./reducers";

const rootReducer = combineReducers({
  changeInputField,
  changePasswordField,
  changeCheckBoxStatus,
  checkFormData
});

export const store = createStore(rootReducer);
