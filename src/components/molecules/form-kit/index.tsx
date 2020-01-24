import { Input, Button, Select } from "antd";
import styles from "./style.module.scss";
import * as React from "react";
import * as validate from "./validater";
import { FormikProps, Field } from "formik";

const { Option } = Select;
const { TextArea } = Input;

export const validater = validate;

export interface InputPropsBase {
  name: string;
  renderProps: FormikProps<any>;
  validater: (value: string) => string | undefined;
  placeholder?: string;
}

export interface InputProps extends InputPropsBase {
  size: "small" | "default" | "large";
  type: "password" | "text" | "email";
}

export function input(props: InputProps) {
  return (
    <Field
      name={props.name}
      validate={props.validater}
      type={props.type}
      render={() => {
        return (
          <Input
            name={props.name}
            size={props.size}
            onBlur={props.renderProps.handleBlur}
            onChange={props.renderProps.handleChange}
            defaultValue={props.renderProps.values.password}
            placeholder={props.placeholder}
          />
        );
      }}
    />
  );
}

export interface TextAreaProps extends InputPropsBase {
  type: "password" | "text" | "email";
  rows: number;
}

export function textArea(props: TextAreaProps) {
  return (
    <Field
      name={props.name}
      validate={props.validater}
      type={props.type}
      render={() => {
        return (
          <TextArea
            name={props.name}
            onBlur={props.renderProps.handleBlur}
            onChange={props.renderProps.handleChange}
            defaultValue={props.renderProps.values.password}
            placeholder={props.placeholder}
            rows={props.rows}
          />
        );
      }}
    />
  );
}

export interface SelectInputProps extends InputPropsBase {
  defaultValue: string | null;
  options: { key: string; value: string }[];
}

export function selectInput(props: SelectInputProps) {
  return (
    <Field
      name={props.name}
      validate={props.validater}
      render={() => {
        return (
          <Select
            defaultValue={props.options[0].key}
            showSearch
            style={{ width: "100%" }}
            placeholder={props.placeholder}
            optionFilterProp="children"
          >
            {(props.options || []).map((v, i) => {
              return (
                <Option key={i} value={v.key}>
                  {v.value}
                </Option>
              );
            })}
          </Select>
        );
      }}
    />
  );
}

export interface ErroeMessageProps {
  name: string;
  renderProps: FormikProps<any>;
}

export function erroeMessage(props: ErroeMessageProps) {
  return (
    <div>
      {props.renderProps.errors[props.name] && props.renderProps.touched[props.name] && (
        <div className={styles["error-message"]}>{props.renderProps.errors[props.name]}</div>
      )}
    </div>
  );
}

export interface ButtomProps {
  type: "link" | "default" | "ghost" | "primary" | "dashed" | "danger";
  loading: boolean;
  size: "large" | "default" | "small";
  className: string;
  htmlType: "submit" | "button" | "reset";
  title: string;
  onClick?: () => void;
}

export function buttom(props: ButtomProps) {
  return (
    <Button
      type={props.type}
      size={props.size}
      className={props.className}
      htmlType={props.htmlType}
      loading={props.loading}
      onClick={props.onClick && props.onClick}
    >
      {props.title}
    </Button>
  );
}
