import React from "react";
import { Helmet } from "react-helmet";
import { MainLayout, MainLayoutProps } from "../../layouts/Main";
import { AccountForm, AccountFormProps } from "./form";

export interface OwnState {}

export interface AccountEditProps {
  mainLayoutProps: MainLayoutProps;
  accountFormProps: AccountFormProps;
}

export class AccountEdit extends React.Component<AccountEditProps, OwnState> {
  constructor(props: AccountEditProps) {
    super(props);
  }
  render() {
    return (
      <MainLayout {...this.props.mainLayoutProps}>
        <Helmet title="account|edit" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Edit Account Page</strong>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Edit Account</strong>
                </div>
                <div className="utils__titleDescription">Edit Account</div>
              </div>
              <div className="card-body">
                <AccountForm {...this.props.accountFormProps} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}
