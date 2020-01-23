import { Form, Input, Button } from "antd";
import { Helmet } from "react-helmet";
import styles from "./style.module.scss";
import * as React from "react";
import { LoginLayout } from "../../../layouts/login-page";

export interface OwnState {}

export interface LoginProps {
  loading: boolean;
  onSubmit: () => void;
}

export class Login extends React.PureComponent<LoginProps, OwnState> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <LoginLayout>
        <div>
          <Helmet title="Login" />
          <div className={`${styles.title} login-heading`}>
            <h1>
              <strong>ADMIN TEMPLATE</strong>
            </h1>
          </div>
          <div className={styles.block}>
            <div className="row">
              <div className="col-xl-12">
                <div className={styles.inner}>
                  <div className={styles.form}>
                    <h4 className="text-uppercase">
                      <strong>Please log in</strong>
                    </h4>
                    <br />
                    <Form layout="vertical" hideRequiredMark onSubmit={this.props.onSubmit}>
                      <Form.Item label="Email">
                        <Input size="default" type="email" />
                      </Form.Item>
                      <Form.Item label="Password">
                        <Input size="default" type="password" />
                      </Form.Item>
                      <div className="form-actions">
                        <Button
                          type="primary"
                          className="width-150 mr-4"
                          htmlType="submit"
                          loading={this.props.loading}
                          onClick={this.props.onSubmit}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginLayout>
    );
  }
}
