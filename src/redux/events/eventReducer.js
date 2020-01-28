

import { CREATE_EVENT,DELETE_EVENT,UPDATE_EVENT } from './eventConstants';
import { Events } from './../data/events';
import { createReducer } from '../../common/util/reducersUtils';


const INITIAL_STATE = Events;

const createEvent =(state,payload) => {
  return [...state,payload.event]
}

const updateEvent =(state,payload) => {
  return[
    ...state.filter(
      event=>event.id !== payload.event.id),payload.event
  ]
}

const deleteEvent = (state,payload)=> {
  return [
    ...state.filter(event=>event.id !== payload.eventId)
  ]
}
export default createReducer(INITIAL_STATE,{
  [CREATE_EVENT]:createEvent,
  [DELETE_EVENT]:deleteEvent,
  [UPDATE_EVENT]:updateEvent,
})
