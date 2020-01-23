import { MenuItem } from "types";

export const paths: {
  [key: string]: MenuItem;
} = {
  login: {
    title: "Login",
    key: "login",
    url: "/login",
    icon: "icmn icmn-home",
    isMenuList: false,
  },
  dashboard: {
    title: "ダッシュボード",
    key: "dashboard",
    url: "/dashboard",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  account: {
    title: "アカウント一覧",
    key: "account",
    url: "/account",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  role: {
    title: "アカウント権限編集",
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
    title: "加盟会社一覧",
    key: "company",
    url: "/company",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  ignoreKeyword: {
    title: "除外キーワード",
    key: "ignore_keyword",
    url: "/ignore_keyword",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  recruitment: {
    title: "求人一覧",
    key: "recruitment",
    url: "/recruitment",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
  application: {
    title: "職種自動判定設定",
    key: "application",
    url: "/application",
    icon: "icmn icmn-home",
    isMenuList: true,
  },
};
