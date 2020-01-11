import { API } from ".";
import { User } from "../interfaces/user";

export const API_getAllUsers = () => {
  return API.get('users')
}

export const API_createUser = (newUsers: Array<User>) => {
  API.post('users', newUsers)
}