import { GET_USERS, CREATE_USER, REMOVE_USER } from "../actionTypes";

const initialState = {
  users: [],
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS: {
      const { users } = action.payload;
      return {
        ...state,
        users
      };
    }
    case CREATE_USER: {
      return {
        ...state,
        users: action.users
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        users: action.users
      };
    }
    default:
      return state;
  }
}
