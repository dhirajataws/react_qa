import {CHANGE_REDIRECT} from '../actions/selectRedirect'

export const selectedRedirect = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_REDIRECT:
      return action.payload;
      break;
    default :
      return state;
  }
}

