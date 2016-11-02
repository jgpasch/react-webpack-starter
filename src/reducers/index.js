import { combineReducers } from 'redux';
import exercises from './exerciseReducer';
import step from './updateStepReducer';

const rootReducer = combineReducers({
  exercises: exercises,
  step: step
});

export default rootReducer;
