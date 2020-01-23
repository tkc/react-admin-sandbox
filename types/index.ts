export interface MenuBaseType {
  title: string;
  key: string;
  url: string;
  icon: string;
  isMenuList: boolean;
}

export interface MenuItemType extends MenuBaseType {
  children?: MenuBaseType[];
}

export interface MenuDividerType {
  divider: boolean;
}

export type MenuType = MenuItemType | MenuDividerType;

export interface UserType {
  name: string;
  email: string;
  role: UserRoleType;
}

export type UserRoleTypeAdmin = "admin";
export type UserRoleTypeMember = "member";
export type UserRoleType = UserRoleTypeAdmin | UserRoleTypeMember;

export interface AccountTableRowType {
  id: number;
  name: string;
  role: UserRoleType;
  details: string;
}

export interface CompanyTableRowType {
  id: number;
  name: string;
  address: string;
  details: string;
}
