import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import rockets from './rockets/rockets';
import missions from './missions/missions';

const reducers = combineReducers({
  rocketsReducer: rockets,
  missionsReducer: missions,

});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
