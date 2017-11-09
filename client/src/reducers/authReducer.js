import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case action.type == FETCH_USER:
      return action.payload || false;
      break;
    default:
      return state;
  }
}
