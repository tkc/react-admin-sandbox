import React from "react";
import { Helmet } from "react-helmet";
import { MainLayout, MainLayoutProps } from "../../layouts/Main";
import { AccountTable } from "./table";

export interface OwnState {}

export interface AccountProps {
  mainLayoutProps: MainLayoutProps;
}

export class Account extends React.Component<AccountProps, OwnState> {
  constructor(props: AccountProps) {
    super(props);
  }
  render() {
    return (
      <MainLayout {...this.props.mainLayoutProps}>
        <Helmet title="Dashboard" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Account Page</strong>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Account</strong>
                </div>
                <div className="utils__titleDescription">Accounts</div>
              </div>
              <div className="card-body">
                <AccountTable />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}
