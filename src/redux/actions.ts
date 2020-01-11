import * as REDUX_TYPES from "./actionTypes";
import { IRating } from "../interfaces/dictionaries";
import { API_getAllUsers, API_createUser } from "../api/users";
import { MODAL_TYPES } from "../constants";
import { User } from "../interfaces/user";

/**
 * Set ratings dictionary to store
 * @param  {Ratings} ratings
 */
export const getRatingsDictionary = (ratings: Array<IRating>) => {
  return {
    type: REDUX_TYPES.GET_RATINGS,
    ratings
  }
};

/**
 * Get all users from fake server;
 */
export const getAllUsers = () => {
  const users = API_getAllUsers();
  return {
    type: REDUX_TYPES.GET_USERS,
    payload: {
      users: users ? users : []
    }
  }
};

/**
 * Hide modal window and clean it
 */
export const hideModal = () => {
  return {
    type: REDUX_TYPES.HIDE_MODAL,
  }
}

/**
 * Show modal for create user
 */
export const modal_createUser = () => {
  return {
    type: REDUX_TYPES.SHOW_MODAL_CREATE_USER,
    modalType: MODAL_TYPES.CREATE_USER
  }
}

/**
 * Show modal for edit user
 */
export const modal_editUser = (user: User) => {
  return {
    type: REDUX_TYPES.SHOW_MODAL_EDIT_USER,
    modalType: MODAL_TYPES.EDIT_USER,
    activeUser: user
  }
}

/**
 * Post user to server and write to store
 */
export const createUser = (users: Array<User>) => {
  API_createUser(users)
  return {
    type: REDUX_TYPES.CREATE_USER,
    users
  }
}

/**
 * Edit user
 */
export const editUser = (users: Array<User>) => {
  API_createUser(users)
  return {
    type: REDUX_TYPES.CREATE_USER,
    users
  }
}

/**
 * Remove user from server and from store
 * @param  {String} userId
 */
export const removeUser = (userId: String) => {
  const users = API_getAllUsers();
  const cleanedUsers = users.filter((user:User) => user.id !== userId)
  API_createUser(cleanedUsers)
  return {
    type: REDUX_TYPES.REMOVE_USER,
    users: cleanedUsers
  }
}