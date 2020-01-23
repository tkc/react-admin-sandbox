import * as types from "../../types";
import { save, load, remove } from "../../src/storage/storage";

const AuthKey = "authKey";

export function isAuth(): boolean {
  return !!load(AuthKey);
}

export function isAdmin(): boolean {
  const role = getRole();
  return !!load(AuthKey) && role === "admin";
}

export function unAuth(): void {
  return remove(AuthKey);
}

export function auth(user: types.UserType): void {
  save(AuthKey, user, 24 * 60);
}

export function getRole(): types.UserRoleType | undefined {
  const loaded = load(AuthKey);
  return loaded && loaded.role;
}
