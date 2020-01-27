import { Form } from "antd";
import { Helmet } from "react-helmet";
import styles from "./style.module.scss";
import * as React from "react";
import { LoginLayout } from "../../../template/login-page";
import { Formik, FormikProps, FormikActions } from "formik";
import * as FormKit from "../../../molecules/form-kit";

export interface FormValues {
  email: string;
  password: string;
}

export interface LoginProps {
  onSubmit: (param: FormValues) => void;
  loading: boolean;
}

export function Login(props: LoginProps) {
  return (
    <Formik
      initialValues={{ email: "", password: "", loading: false }}
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
                          {FormKit.input({
                            name: "email",
                            renderProps,
                            validater: FormKit.validater.validateEmail(),
                            size: "default",
                            type: "email",
                            defaultValue: "",
                          })}
                          {FormKit.erroeMessage({ name: "email", renderProps })}
                        </Form.Item>
                        <Form.Item label="Password">
                          {FormKit.input({
                            name: "password",
                            renderProps,
                            validater: FormKit.validater.validatePaaword(),
                            size: "default",
                            type: "password",
                            defaultValue: "",
                          })}
                          {FormKit.erroeMessage({ name: "password", renderProps })}
                        </Form.Item>
                        <div className="form-actions">
                          {FormKit.buttom({
                            type: "primary",
                            loading: props.loading,
                            size: "default",
                            className: "width-150 mr-4",
                            htmlType: "submit",
                            title: "login",
                          })}
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
}
