import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import * as pages from "./loadables";
import { paths } from "./paths";
import { PrivateRoute } from "src/routes//private-router";

export const Routes = (
  <Switch>
    <Route exact path={paths.login.url} component={() => <pages.Login />} />
    <PrivateRoute exact path={paths.login.url} component={() => <pages.Dashboard />} />
    <PrivateRoute exact path={paths.dashboard.url} component={() => <pages.Dashboard />} />
    <PrivateRoute exact path={paths.account.url} component={() => <pages.Account />} />
    <PrivateRoute exact path={paths.accountNew.url} component={() => <pages.AccountNew />} />
    <PrivateRoute exact path={paths.accountEdit.url} component={() => <pages.AccountEdit />} />
    <PrivateRoute exact path={paths.company.url} component={() => <pages.Company />} />
    <PrivateRoute exact path={paths.ignoreKeyword.url} component={() => <pages.notFound />} />
    <PrivateRoute exact path={paths.recruitment.url} component={() => <pages.notFound />} />
    <PrivateRoute exact path={paths.application.url} component={() => <pages.notFound />} />
    <Redirect to={paths.login.url ? paths.login.url : "login"} />
  </Switch>
);
