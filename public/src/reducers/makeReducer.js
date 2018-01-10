import {CHANGE_SELECTION} from '../actions/selectMake'

export const selectedMake = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SELECTION  :
      //return Object.assign({}, state.selectedCar, action.payload);
      return action.payload;
      break;
    default :
      return state;
  }
}

