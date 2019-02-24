import { GET_PROJECTS, GET_PROJECT } from "../actions/types";

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
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
