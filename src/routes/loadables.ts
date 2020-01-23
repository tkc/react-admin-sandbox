import loadable from "loadable-components";

export const Login = loadable(() => import("../containers/page/login"));
export const Dashboard = loadable(() => import("../containers/page/dashbord"));
export const Account = loadable(() => import("../containers/page/accoount"));
export const Company = loadable(() => import("../containers/page/company"));
export const IgnoreKeyword = loadable(() => import("../containers/page/dashbord"));
export const Recruitment = loadable(() => import("../containers/page/dashbord"));
export const Application = loadable(() => import("../containers/page/dashbord"));
export const Occupation = loadable(() => import("../containers/page/dashbord"));
export const Plan = loadable(() => import("../containers/page/dashbord"));
export const notFound = loadable(() => import("../components/pages/404"));
