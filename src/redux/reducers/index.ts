import { combineReducers } from "redux";
import dictionaries from "./dictionaries";
import users from "./users";
import modal from "./modal";

export default combineReducers({ dictionaries, users, modal});
