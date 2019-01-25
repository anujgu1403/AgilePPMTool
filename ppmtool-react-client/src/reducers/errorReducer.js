import { GET_ERRORS } from "../actions/types";

const initailState = {};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
}
