import { combineReducers } from "redux";

import eventReducer from "../../components/events/eventReducer";
import testReducer from "../../components/play/testReducer";
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  test: testReducer,
  events:eventReducer,
  form:FormReducer
})

export default rootReducer;