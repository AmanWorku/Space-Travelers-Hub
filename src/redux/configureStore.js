import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import rockets from './rockets/rockets';
import missions from './missions/missions';
import dragons from './dragons/dragons';

const reducers = combineReducers({
  rocketsReducer: rockets,
  dragonsReducer: dragons,
  missionsReducer: missions,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
