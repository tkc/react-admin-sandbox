import React from "react";
import { Form } from "antd";
import { Helmet } from "react-helmet";
import { Formik, FormikProps, FormikActions } from "formik";
import * as FormKit from "../../../components/molecules/form-kit";
const FormItem = Form.Item;

export interface FormValues {
  name: string;
  description: string;
  size: string;
}

export interface AccountFormProps {
  onSubmit: (id: number) => void;
  loading: boolean;
}

export function AccountForm(props: AccountFormProps) {
  return (
    <>
      <Helmet title="Product Edit" />
      <Formik
        initialValues={{ name: "name", description: "password", size: "size", loading: false }}
        onSubmit={(param: FormValues, actions: FormikActions<FormValues>) => {
          // props.onSubmit(param);
        }}
        render={(renderProps: FormikProps<FormValues>) => (
          <Form
            layout="vertical"
            onSubmit={e => {
              renderProps.handleSubmit(e);
            }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Form.Item label="Username">
                        {FormKit.input({
                          name: "name",
                          renderProps,
                          validater: FormKit.validater.validateSimplaInput(10),
                          size: "default",
                          type: "text",
                          placeholder: "Product title",
                        })}
                        {FormKit.erroeMessage({ name: "name", renderProps })}
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <FormItem label="description">
                        {FormKit.textArea({
                          name: "description",
                          renderProps,
                          validater: FormKit.validater.validateSimplaInput(10),
                          rows: 3,
                          type: "text",
                          placeholder: "",
                        })}
                        {FormKit.erroeMessage({ name: "description", renderProps })}
                      </FormItem>
                    </div>
                    <h4 className="text-black mt-2 mb-3">
                      <strong>Attributes</strong>
                    </h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <FormItem label="colors">
                            {FormKit.selectInput({
                              name: "colors",
                              renderProps,
                              validater: FormKit.validater.validateSimplaInput(100),
                              defaultValue: "red",
                              placeholder: "Select a color",
                              options: [
                                { key: "blue", value: "blue" },
                                { key: "red", value: "red" },
                                { key: "green", value: "green" },
                              ],
                            })}
                            {FormKit.erroeMessage({ name: "colors", renderProps })}
                          </FormItem>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-actions">
                          {FormKit.buttom({
                            type: "primary",
                            loading: props.loading,
                            size: "default",
                            className: "width-150 mr-4",
                            htmlType: "submit",
                            title: "Save Product",
                          })}
                          {FormKit.buttom({
                            type: "ghost",
                            loading: props.loading,
                            size: "default",
                            className: "mr-4",
                            htmlType: "button",
                            title: "Cancel",
                            onClick: () => {},
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </>
  );
}
