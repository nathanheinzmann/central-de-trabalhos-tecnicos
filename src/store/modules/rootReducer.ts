import { combineReducers } from 'redux';
import { inputsReducer } from './inputs';

const reducers = {
  inputs: inputsReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
