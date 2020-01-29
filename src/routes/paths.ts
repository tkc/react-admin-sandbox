import { MenuItemType } from "types/appType";

export const paths: {
  [key: string]: MenuItemType;
} = {
  login: {
    title: "Login",
    key: "login",
    url: "/login",
    icon: "icmn icmn-home",
    isMenuList: false,
  },
  dashboard: {
    title: "Dashboard",
    key: "dashboard",
    url: "/dashboard",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  account: {
    title: "Account",
    key: "account",
    url: "/account",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  accountNew: {
    title: "Account_new",
    key: "account_new",
    url: "/account_new",
    icon: "icmn icmn-home",
    isMenuList: false,
  },
  accountEdit: {
    title: "Account_edit",
    key: "account_edit",
    url: "/account_edit",
    icon: "icmn icmn-home",
    isMenuList: false,
  },
  company: {
    title: "Company",
    key: "company",
    url: "/company",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  ignoreKeyword: {
    title: "Ignore_keyword",
    key: "ignore_keyword",
    url: "/ignore_keyword",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  recruitment: {
    title: "Recruitment",
    key: "recruitment",
    url: "/recruitment",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  application: {
    title: "Application",
    key: "application",
    url: "/application",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  occupation: { title: "Occupation", key: "occupation", url: "/occupation", icon: "icmn icmn-home", isMenuList: true },
  plan: { title: "Plan", key: "plan", url: "/plan", icon: "icmn icmn-home", isMenuList: true },
};
