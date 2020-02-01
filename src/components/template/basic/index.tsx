import React from "react";
import { BackTop, Layout } from "antd";
import classNames from "classnames";
import { TopBar, TopBarProps } from "../../molecules/top-bar";
import { Menu, MenuProps } from "../../molecules/menu";
import Settings from "../../molecules/settings";

export interface OwnState {}

export interface MainLayoutProps {
  isBorderless: boolean;
  isSquaredBorders: boolean;
  isFixedWidth: boolean;
  isMenuShadow: boolean;
  isMenuTop: boolean;
  topBarProps: TopBarProps;
  menuProps: MenuProps;
  children?: React.ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
  return (
    <Layout
      className={classNames({
        settings__borderLess: props.isBorderless,
        settings__squaredBorders: props.isSquaredBorders,
        settings__fixedWidth: props.isFixedWidth,
        settings__menuShadow: props.isMenuShadow,
        settings__menuTop: props.isMenuTop,
      })}
    >
      <BackTop />
      <Menu {...props.menuProps} />
      <Settings />
      <Layout>
        <Layout.Header style={{ padding: "0%" }}>
          <TopBar {...props.topBarProps} />
        </Layout.Header>
        <Layout.Content style={{ height: "100%", position: "relative" }}>
          <div className="utils__content">{props.children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
