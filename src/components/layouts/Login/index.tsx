import React from "react";
import { Layout } from "antd";
import styles from "./style.module.scss";

export interface OwnState {
  backgroundNumber: number;
  backgroundEnabled: boolean;
}

export interface LoginLayoutProps {}

export class LoginLayout extends React.PureComponent<LoginLayoutProps, OwnState> {
  constructor(props: LoginLayoutProps) {
    super(props);
    this.state = {
      backgroundNumber: 1,
      backgroundEnabled: false,
    };
  }

  changeBackground = () => {
    const { backgroundNumber } = this.state;
    this.setState({
      backgroundEnabled: true,
      backgroundNumber: backgroundNumber === 5 ? 1 : backgroundNumber + 1,
    });
  };

  toggleBackground = () => {
    const { backgroundEnabled } = this.state;
    this.setState({
      backgroundEnabled: !backgroundEnabled,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Layout.Content>
          <div>
            <div className={styles.header}>
              <div className={styles.logo}></div>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}
