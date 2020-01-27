import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';
import { createReducer } from '../../common/util/reducersUtils';



const INITIAL_STATE = {
  data: 42
}
const  increment = (state)=> {
  return { ...state, data: state.data + 1 }
}

const  decrement= (state)=> {
  return { ...state, data: state.data + 1 }
}

export default createReducer(INITIAL_STATE,{
  [INCREMENT_COUNTER]:increment,
  [DECREMENT_COUNTER]:decrement
})

// const TestReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 }
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data  - 1 }
//     default:
//         return state
//   }
 
// }