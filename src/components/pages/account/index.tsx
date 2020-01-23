import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "antd";
import { MainLayout, MainLayoutProps } from "../../layouts/Main";
import { AccountTable, AccountTableProps } from "./table";

export interface OwnState {}

export interface AccountProps {
  onClickNewAccount: () => void;
  mainLayoutProps: MainLayoutProps;
  accountTableProps: AccountTableProps;
}

export class Account extends React.Component<AccountProps, OwnState> {
  constructor(props: AccountProps) {
    super(props);
  }
  render() {
    return (
      <MainLayout {...this.props.mainLayoutProps}>
        <Helmet title="Account" />
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
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.onClickNewAccount();
                  }}
                >
                  New Account
                </Button>
              </div>
              <div className="card-body">
                <AccountTable {...this.props.accountTableProps} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}
