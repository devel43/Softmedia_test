import { GET_RATINGS } from "../actionTypes";

const initialState = {
  ratings: [],
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case GET_RATINGS: {
      const { ratings } = action;
      return {
        ...state,
        ratings
      };
    }
    default:
      return state;
  }
}
