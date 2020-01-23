import React from "react";
import { Layout, Button } from "antd";
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
    const { backgroundNumber, backgroundEnabled } = this.state;
    return (
      <Layout>
        <Layout.Content>
          <div
            className={backgroundEnabled ? `${styles.layout} ${styles.light}` : `${styles.layout}`}
            style={{
              backgroundImage: backgroundEnabled ? `url('resources/images/photos/${backgroundNumber}.jpeg')` : `none`,
            }}
          >
            <div className={styles.header}>
              <div className={styles.logo}>
                {!backgroundEnabled && <img src="resources/images/logo.png" />}
                {backgroundEnabled && <img src="resources/images/logo-inverse.png" />}
              </div>
              <div className={styles.controls}>
                <div className="d-inline-block mr-3">
                  <Button type="default" onClick={this.changeBackground}>
                    Change Background
                  </Button>
                </div>
                <div className="d-inline-block">
                  <Button type="default" onClick={this.toggleBackground}>
                    Toggle Background
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}
