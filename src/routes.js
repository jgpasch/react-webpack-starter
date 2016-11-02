import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ExercisePage from './components/exercises/ExercisePage';
import CreateExerciseContainer from './components/exercises/create/CreateExerciseContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExercisePage} />
    <Route path="/create" component={CreateExerciseContainer} />
  </Route>
);
