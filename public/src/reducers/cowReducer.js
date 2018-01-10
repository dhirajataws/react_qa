import {FETCH_COW} from "../actions/fetchCow";

export const carOfWeek = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_COW' :
      return action.payload;
      break;

    default :
      return state;
  }
}

