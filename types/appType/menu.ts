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
