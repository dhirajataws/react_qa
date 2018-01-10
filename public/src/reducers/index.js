import {combineReducers} from 'redux';
import {carOfWeek} from './cowReducer';
import {selectedMake} from "./makeReducer";
import {selectedModel} from "./modelReducer";
import {selectedRedirect} from "./redirectReducer";

export const reducers = combineReducers({
  carOfWeek,
  selectedMake,
  selectedModel,
  selectedRedirect,
})
