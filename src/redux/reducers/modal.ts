import { HIDE_MODAL, SHOW_MODAL_CREATE_USER, SHOW_MODAL_EDIT_USER } from "../actionTypes";
import { MODAL_TYPES } from "../../constants";

const initialState = {
  isShow: false,
  modalType: MODAL_TYPES.CREATE_USER,
  activeUser: {
    firstName: "",
    secondName: "",
    lastName: "",
    dateOfBirthday: new Date().toString(),
    id: "",
    rating: 5
  }
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case SHOW_MODAL_CREATE_USER: {
      return {
        ...state,
        isShow: true,
        modalType: MODAL_TYPES.CREATE_USER
      };
    }
    case SHOW_MODAL_EDIT_USER: {
      return {
        ...state,
        isShow: true,
        modalType: MODAL_TYPES.EDIT_USER,
        activeUser: action.activeUser
      };
    }
    case HIDE_MODAL: {
      return {
        ...state,
        isShow: false,
        activeUser: initialState.activeUser
      };
    }
    default:
      return state;
  }
}
