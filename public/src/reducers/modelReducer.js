import {CHANGE_MODEL_SELECTION} from '../actions/selectModel'

export const selectedModel = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MODEL_SELECTION:
      return action.payload;
      break;
    default :
      return state;
  }
}

