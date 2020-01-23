import { MenuType } from "types";

export const menuData: MenuType[] = [
  {
    divider: true,
  },
  {
    title: "Dashboard Alpha",
    key: "dashboardAlpha",
    url: "/dashboard/alpha",
    icon: "icmn icmn-home",
  },
  {
    title: "Dashboard Beta",
    key: "dashboardBeta",
    url: "/dashboard/beta",
    icon: "icmn icmn-home",
  },
  {
    title: "Dashboard Crypto",
    key: "dashboardCrypto",
    url: "/dashboard/crypto",
    icon: "icmn icmn-home",
  },
  {
    title: "Dashboard Gamma",
    key: "dashboardGamma",
    url: "/dashboard/gamma",
    icon: "icmn icmn-home",
  },
  {
    title: "Dashboard Docs",
    key: "dashboardDocs",
    url: "/dashboard/docs",
    icon: "icmn icmn-home",
  },
  {
    divider: true,
  },
  {
    title: "AntDesign Components",
    key: "antComponents",
    icon: "icmn icmn-menu",
    url: "/antd",
  },
  {
    divider: true,
  },
  {
    title: "Default Pages",
    key: "defaultPages",
    icon: "icmn icmn-file-text",
    children: [
      {
        key: "loginAlpha",
        title: "Login Alpha",
        url: "/pages/login-alpha",
      },
      {
        key: "loginBeta",
        title: "Login Beta",
        url: "/pages/login-beta",
      },
      {
        key: "register",
        title: "Register",
        url: "/pages/register",
      },
      {
        key: "lockscreen",
        title: "Lockscreen",
        url: "/pages/lockscreen",
      },
      {
        key: "pricingTable",
        title: "Pricing Tables",
        url: "/pages/pricing-table",
      },
      {
        key: "invoice",
        title: "Invoice",
        url: "/pages/invoice",
      },
    ],
  },
];
