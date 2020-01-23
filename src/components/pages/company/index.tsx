import React from "react";
import { Helmet } from "react-helmet";
import { MainLayout, MainLayoutProps } from "../../layouts/basic";
import { AccountTable } from "./table";

export interface OwnState {}

export interface CompanyProps {
  mainLayoutProps: MainLayoutProps;
}

export class Company extends React.Component<CompanyProps, OwnState> {
  constructor(props: CompanyProps) {
    super(props);
  }
  render() {
    return (
      <MainLayout {...this.props.mainLayoutProps}>
        <Helmet title="Dashboard" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Company Page</strong>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Company</strong>
                </div>
                <div className="utils__titleDescription">Company</div>
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
