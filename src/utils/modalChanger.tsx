import { MODAL_TYPES } from "../constants";
import React from "react";
import CreateUserModal from "../containers/CreateUserModal";
import EditUserModal from "../containers/EditUserModal";

/**
 * Change modal template by name
 * @param modalName 
 */
export const changeModal = (modalName:string) => {
  switch (modalName) {
    case MODAL_TYPES.CREATE_USER:
      return <CreateUserModal />
    case MODAL_TYPES.EDIT_USER:
      return <EditUserModal />
    default:
      return null
  }
}