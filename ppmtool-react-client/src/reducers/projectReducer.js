import { GET_PROJECTS } from "../actions/types";

const initailState = {
  project: [],
  projects: {}
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
