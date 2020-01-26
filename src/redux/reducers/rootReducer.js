import { combineReducers } from "redux";
import TestReducer from './../../playground/testReducer';

const rootReducer = combineReducers({
  test: TestReducer
})

export default rootReducer;