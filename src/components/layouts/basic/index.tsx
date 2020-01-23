import React from "react";
import { BackTop, Layout } from "antd";
import classNames from "classnames";
import { TopBar, TopBarProps } from "../../layout-components/top-bar";
import { Menu, MenuProps } from "../../layout-components/menu";
import Settings from "../../layout-components/settings";

export interface OwnState {}

export interface MainLayoutProps {
  isBorderless: boolean;
  isSquaredBorders: boolean;
  isFixedWidth: boolean;
  isMenuShadow: boolean;
  isMenuTop: boolean;
  topBarProps: TopBarProps;
  menuProps: MenuProps;
}

export class MainLayout extends React.PureComponent<MainLayoutProps, OwnState> {
  constructor(props: MainLayoutProps) {
    super(props);
  }
  render() {
    return (
      <Layout
        className={classNames({
          settings__borderLess: this.props.isBorderless,
          settings__squaredBorders: this.props.isSquaredBorders,
          settings__fixedWidth: this.props.isFixedWidth,
          settings__menuShadow: this.props.isMenuShadow,
          settings__menuTop: this.props.isMenuTop,
        })}
      >
        <BackTop />
        <Menu {...this.props.menuProps} />
        <Settings />
        <Layout>
          <Layout.Header style={{ padding: "0%" }}>
            <TopBar {...this.props.topBarProps} />
          </Layout.Header>
          <Layout.Content style={{ height: "100%", position: "relative" }}>
            <div className="utils__content">{this.props.children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}
