import { combineReducers } from "redux";
import { user } from "./user/user";
import { auth } from "./auth/auth";

export const reducers = combineReducers({
  user,
  auth,
});

export type State = {
  user: ReturnType<typeof user>;
  auth: ReturnType<typeof auth>;
};
