import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { isAuth } from "../../src/auth/auth";

export const PrivateRoute = ({ component: Component }: RouteProps) => {
  return (
    <Route
      render={props => {
        // : TODO
        if (true || isAuth()) {
          if (Component) {
            return <Component {...props} />;
          }
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};
