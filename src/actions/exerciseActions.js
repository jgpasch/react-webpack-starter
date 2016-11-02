import * as types from './actionTypes';
import exercisesApi from '../api/exerciseApi';

/*  
  **                     **
    LOAD EXERCISE actions
  **                     **
*/
export function loadExercisesSuccess(exercises) {
  return { type:
    types.LOAD_EXERCISES_SUCCESS,
    exercises: exercises
  };
}

export function loadExercises() {
  return function(dispatch) {
    return exercisesApi.getAllExercises((data) => {
      dispatch(loadExercisesSuccess(data));
    }); 

  };
}


/*  
  **                     **
    INIT STEP actions
  **                     **
*/
export function initStepSuccess() {
  return { 
    type: types.INIT_STEP_SUCCESS,
    step: 1
  };
}

export function initStep() {
  // debugger;
  return function(dispatch) {
    return dispatch(initStepSuccess());
  };
}


/*  
  **                     **
    NEXT STEP actions
  **                     **
*/
export function nextStepSuccess(step) {
  return {
    type: types.NEXT_STEP_SUCCESS,
    step: step
  };
}

export function nextStep(step) {
  return function(dispatch) {
    return dispatch(nextStepSuccess(step));
  };
}


/*  
  **                     **
    PREVIOUS STEP actions
  **                     **
*/
export function previousStepSuccess(step) {
  return { type:
    types.PREVIOUS_STEP_SUCCESS,
    step: step
  };
}

export function previousStep(step) {
  return function(dispatch) {
    return dispatch(previousStepSuccess(step));
  };
}



//CREATE EXERCISE 

export function createExerciseSuccess(exercise) {
  // debugger;
  // console.log(exercises);
  return { type:
    types.CREATE_EXERCISE_SUCCESS,
    exercise
  };
}

export function createExercise() {
  // debugger;
  return function(dispatch) {
    return exercisesApi.createExercise((exercise) => {
      dispatch(createExerciseSuccess(exercise));
    }); 

  };
}