import * as types from '../actions/actionTypes';

export default function exerciseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_EXERCISES_SUCCESS:
      return action.exercises;
    default:
      return state;
  }
}
