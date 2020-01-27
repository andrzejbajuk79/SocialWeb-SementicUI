import { combineReducers } from "redux";

import eventReducer from "../../components/events/eventReducer";
import testReducer from "../../components/play/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  events:eventReducer
})

export default rootReducer;