export interface MenuBaseType {
  title: string;
  key: string;
  url: string;
  icon: string;
  isMenuList: boolean;
}

export interface MenuItem extends MenuBaseType {
  children?: MenuBaseType[];
}

export interface MenuDividerType {
  divider: boolean;
}

export type MenuType = MenuItem | MenuDividerType;

export interface UserType {
  name: string;
  email: string;
  role: UserRoleType;
}

export type UserRoleTypeAdmin = "admin";
export type UserRoleTypeMember = "member";
export type UserRoleType = UserRoleTypeAdmin | UserRoleTypeMember;

export interface User {
  name: string;
  id: number;
  email: string;
  role: UserRoleType;
}

export interface AccountTableRow {
  id: number;
  name: string;
  role: UserRoleType;
  details: string;
}

export interface CompanyTableRow {
  id: number;
  name: string;
  address: string;
  details: string;
}
