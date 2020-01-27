import React from "react";
import { Helmet } from "react-helmet";
import { MainLayout, MainLayoutProps } from "../../template/basic";
import { AccountForm, AccountFormProps } from "./form";

export interface OwnState {}

export interface AccountNewProps {
  mainLayoutProps: MainLayoutProps;
  accountFormProps: AccountFormProps;
}

export function AccountNew(props: AccountNewProps) {
  return (
    <MainLayout {...props.mainLayoutProps}>
      <Helmet title="Dashboard" />
      <div className="utils__title utils__title--flat mb-3">
        <strong className="text-uppercase font-size-16">New Account Page</strong>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="utils__title">
                <strong>New Account</strong>
              </div>
              <div className="utils__titleDescription">New Account</div>
            </div>
            <div className="card-body">
              <AccountForm {...props.accountFormProps} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
