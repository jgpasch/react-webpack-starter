import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore(initState) {
  return createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
