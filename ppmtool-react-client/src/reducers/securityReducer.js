import { SET_CURRENT_USER } from "../actions/types";
const initailState = {
  user: {},
  validToken: false
};

const checkActionPayload = payload => {
  if (payload) return true;
  else return false;
};
export default function(state = initailState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: checkActionPayload(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
}
