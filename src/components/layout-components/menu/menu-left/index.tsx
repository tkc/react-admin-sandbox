import React from "react";
import { Menu, Layout } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import _ from "lodash";
import styles from "./style.module.scss";
import { paths } from "../../../../../src/routes/paths";

const { Sider } = Layout;

export interface OwnState {
  selectedKeys: any;
  openedKeys: any;
}

export interface MenuLeftProps {
  isMobileView: boolean;
  isMenuCollapsed: boolean;
  isLightTheme: boolean;
  onClick: (path: string) => void;
}

export class MenuLeft extends React.Component<MenuLeftProps, OwnState> {
  constructor(props: MenuLeftProps) {
    super(props);
    this.state = { selectedKeys: "", openedKeys: "" };
  }

  componentWillMount() {
    this.setSelectedKeys(this.props);
  }

  componentWillReceiveProps(newProps: any) {
    if (newProps.isMenuCollapsed && !newProps.isMobileView) {
      this.setState({ openedKeys: [] });
    }
    this.setSelectedKeys(newProps);
  }

  setSelectedKeys = (props: any) => {};
  onCollapse = (value: any, type: any) => {};

  onOpenChange = (openedKeys: any) => {
    this.setState({ openedKeys });
  };

  handleClick = (e: any) => {};

  generateMenuItems = () => {
    return Object.keys(paths)
      .filter(index => {
        return paths[index].isMenuList;
      })
      .map(index => {
        const { key, title, icon, url } = paths[index];
        return (
          <Menu.Item
            key={key}
            onClick={() => {
              this.props.onClick(url);
            }}
          >
            {icon && <span className={`${icon} ${styles.icon} icon-collapsed-hidden`} />}
            <span className={styles.title}>{title}</span>
          </Menu.Item>
        );
      });
  };

  render() {
    const { selectedKeys, openedKeys } = this.state;
    const { isMobileView, isMenuCollapsed, isLightTheme } = this.props;
    const menuSettings: any = isMobileView
      ? {
          width: 256,
          collapsible: false,
          collapsed: false,
          onCollapse: this.onCollapse,
        }
      : {
          width: 256,
          collapsible: true,
          collapsed: isMenuCollapsed,
          onCollapse: this.onCollapse,
          breakpoint: "lg",
        };

    const menu = this.generateMenuItems();

    return (
      <Sider {...menuSettings} className={isLightTheme ? `${styles.menu} ${styles.light}` : styles.menu}>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <img src={`resources/images/logo-inverse${menuSettings.collapsed ? "-mobile" : ""}.png`} />
          </div>
        </div>
        <Scrollbars
          className={isMobileView ? styles.scrollbarMobile : styles.scrollbarDesktop}
          renderThumbVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                width: "4px",
                borderRadius: "inherit",
                backgroundColor: "#c5cdd2",
                left: "1px",
              }}
            />
          )}
        >
          <Menu
            theme={isLightTheme ? "light" : "dark"}
            onClick={this.handleClick}
            selectedKeys={selectedKeys}
            openKeys={openedKeys}
            onOpenChange={this.onOpenChange}
            mode="inline"
            className={styles.navigation}
          >
            {menu}
          </Menu>
        </Scrollbars>
      </Sider>
    );
  }
}
