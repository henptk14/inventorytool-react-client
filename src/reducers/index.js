import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import errorReducer from "./ErrorReducer";

export default combineReducers({
  errorRed: errorReducer,
  form: formReducer
});
