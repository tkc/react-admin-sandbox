import { Form, Input, Button } from "antd";
import { Helmet } from "react-helmet";
import styles from "./style.module.scss";
import * as React from "react";
import { LoginLayout } from "../../../template/login-page";
import { Formik, FormikProps, FormikActions, Field } from "formik";

export interface FormValues {
  email: string;
  password: string;
}

export interface LoginProps {
  onSubmit: (param: FormValues) => void;
  loading: boolean;
}

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validatePaaword(value: string) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

export const Login = (props: LoginProps) => {
  return (
    <Formik
      initialValues={{ email: "email", password: "password", loading: false }}
      onSubmit={(param: FormValues, actions: FormikActions<FormValues>) => {
        props.onSubmit(param);
      }}
      render={(renderProps: FormikProps<FormValues>) => (
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
                      <Form
                        onSubmit={e => {
                          renderProps.handleSubmit(e);
                        }}
                      >
                        <Form.Item label="Email">
                          <Field
                            name="email"
                            validate={validateEmail}
                            type={"email"}
                            render={() => {
                              return (
                                <Input
                                  name="email"
                                  size="default"
                                  onBlur={renderProps.handleBlur}
                                  onChange={renderProps.handleChange}
                                  defaultValue={renderProps.values.email}
                                />
                              );
                            }}
                          />
                          {renderProps.errors.email && renderProps.touched.email && (
                            <div>{renderProps.errors.email}</div>
                          )}
                        </Form.Item>
                        <Form.Item label="Password">
                          <Field
                            name="password"
                            validate={validatePaaword}
                            type={"password"}
                            render={() => {
                              return (
                                <Input
                                  name="password"
                                  size="default"
                                  onBlur={renderProps.handleBlur}
                                  onChange={renderProps.handleChange}
                                  defaultValue={renderProps.values.password}
                                />
                              );
                            }}
                          />
                          {renderProps.errors.password && renderProps.touched.password && (
                            <div>{renderProps.errors.password}</div>
                          )}
                        </Form.Item>
                        <div className="form-actions">
                          <Button type="primary" className="width-150 mr-4" htmlType="submit" loading={props.loading}>
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
      )}
    />
  );
};
