import React from "react";
import { Button, Table } from "antd";
import { Helmet } from "react-helmet";
import PaymentAccount from "../../../clean-ui-components/payment-account";
import PaymentTransaction from "../../../clean-ui-components/payment-transaction";
import ChartCard from "../../../clean-ui-components/chart=card";
import { MainLayout, MainLayoutProps } from "../../../layouts/Main";

const tableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: "Office",
    dataIndex: "office",
    key: "office",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    sorter: (a: any, b: any) => a.salary - b.salary,
  },
];

export const tableData = [
  {
    key: "1",
    name: "Damon",
    position: "5516 Adolfo Green",
    office: "Littelhaven",
    age: 18,
    date: "2014/06/13",
    salary: 553.536,
  },
  {
    key: "2",
    name: "Miracle",
    position: "176 Hirthe Squares",
    office: "Ryleetown",
    age: 35,
    date: "2013/09/27",
    salary: 784.802,
  },
  {
    key: "3",
    name: "Torrey",
    position: "1995 Richie Neck",
    office: "West Sedrickstad",
    age: 15,
    date: "2014/09/12",
    salary: 344.302,
  },
];

export interface OwnState {}

export interface DashboardProps {
  mainLayoutProps: MainLayoutProps;
}

export class Dashboard extends React.Component<DashboardProps, OwnState> {
  constructor(props: DashboardProps) {
    super(props);
  }
  render() {
    return (
      <MainLayout {...this.props.mainLayoutProps}>
        <div>
          <Helmet title="Dashboard Alpha" />
          <div className="utils__title utils__title--flat mb-3">
            <strong className="text-uppercase font-size-16">Last Week Statistics</strong>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <ChartCard
                title="Transactions"
                amount="1240"
                chartProps={{
                  width: 120,
                  height: 107,
                  lines: [
                    {
                      values: [2, 11, 8, 14, 18, 20, 26],
                      colors: {
                        area: "rgba(199, 228, 255, 0.5)",
                        line: "#004585",
                      },
                    },
                  ],
                }}
              />
            </div>
            <div className="col-xl-4">
              <ChartCard
                title="Income"
                amount="$1,240.00"
                chartProps={{
                  width: 120,
                  height: 107,
                  lines: [
                    {
                      values: [20, 80, 67, 120, 132, 66, 97],
                      colors: {
                        area: "rgba(199, 228, 255, 0.5)",
                        line: "#004585",
                      },
                    },
                  ],
                }}
              />
            </div>
            <div className="col-xl-4">
              <ChartCard
                title="Outcome"
                amount="$240.56"
                chartProps={{
                  width: 120,
                  height: 107,
                  lines: [
                    {
                      values: [42, 40, 80, 67, 84, 20, 97],
                      colors: {
                        area: "rgba(199, 228, 255, 0.5)",
                        line: "#004585",
                      },
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="utils__title">
                    <strong>Recently Referrals</strong>
                  </div>
                  <div className="utils__titleDescription">Block with important Recently Referrals information</div>
                </div>
                <div className="card-body">
                  <Table
                    className="utils__scrollTable"
                    scroll={{ x: "100%" }}
                    columns={tableColumns}
                    dataSource={tableData}
                    pagination={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <PaymentAccount
                icon="lnr lnr-inbox"
                number="US 4658-1678-7528"
                footer="Current month charged: $10,200.00"
                sum="$2,156.78"
              />
            </div>
            <div className="col-lg-6">
              <PaymentAccount
                icon="lnr lnr-inbox"
                number="IBAN 445646-8748-4664-1678-5416"
                footer="Current month charged: $1,276.00"
                sum="$560,245.35"
              />
            </div>
          </div>
          <div className="utils__title mb-3">
            <strong className="text-uppercase font-size-16">Recent Transactions (167)</strong>
            <Button className="ml-3">View All</Button>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <PaymentTransaction
                income={false}
                amount="-$100.00"
                info="US 4658-1678-7528"
                footer="To AMAZON COPR, NY, 1756"
              />
              <PaymentTransaction
                income
                amount="+27,080.00"
                info="4512-XXXX-1678-7528"
                footer="To DigitalOcean Cloud Hosting, Winnetka, LA"
              />
              <PaymentTransaction
                income={false}
                amount="-100,000.00"
                info="6245-XXXX-1678-3256"
                footer="To Tesla Cars, LA, USA"
              />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}
