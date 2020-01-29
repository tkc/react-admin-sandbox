import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export const PrivateRoute = ({ component: Component }: RouteProps) => {
  return (
    <Route
      render={props => {
        // : TODO
        if (true) {
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
