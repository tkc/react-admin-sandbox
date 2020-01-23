import React from "./node_modules/src/components/layout-components/menu/menuLeft/node_modules/react";
import { Menu, Layout } from "./node_modules/src/components/layout-components/menu/menuLeft/node_modules/antd";
import { Scrollbars } from "./node_modules/src/components/layout-components/menu/menuLeft/node_modules/react-custom-scrollbars";
import * as types from "./node_modules/types";
import _ from "./node_modules/src/components/layout-components/menu/menuLeft/node_modules/lodash";
import styles from "./style.module.scss";
import { menuData } from "./data";

const { Sider } = Layout;
const { SubMenu, Divider } = Menu;

export interface OwnState {
  selectedKeys: any;
  openedKeys: any;
}

export interface MenuLeftProps {
  isMobileView: boolean;
  isMenuCollapsed: boolean;
  isLightTheme: boolean;
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

  setSelectedKeys = (props: any) => {
    // const { menuData } = this.props;
    // const flattenItems = (items, key) =>
    //   items.reduce((flattenedItems, item) => {
    //     flattenedItems.push(item);
    //     if (Array.isArray(item[key])) {
    //       return flattenedItems.concat(flattenItems(item[key], key));
    //     }
    //     return flattenedItems;
    //   }, []);
    // const selectedItem = _.find(flattenItems(menuData, "children"), ["url", props.location.pathname]);
    // this.setState({
    //   selectedKeys: selectedItem ? [selectedItem.key] : [],
    // });
  };

  onCollapse = (value: any, type: any) => {};

  onOpenChange = (openedKeys: any) => {
    this.setState({ openedKeys });
  };

  handleClick = (e: any) => {};

  generateMenuItems = () => {
    const generateItem = (item: types.MenuType) => {
      if ("divider" in item) {
        return <Divider key={Math.random()} />;
      }
      const { key, title, icon } = item;
      if (item.url) {
        return (
          <Menu.Item key={key}>
            {icon && <span className={`${icon} ${styles.icon} icon-collapsed-hidden`} />}
            <span className={styles.title}>{title}</span>
          </Menu.Item>
        );
      }
      return (
        <Menu.Item key={key}>
          {icon && <span className={`${icon} ${styles.icon} icon-collapsed-hidden`} />}
          <span className={styles.title}>{title}</span>
        </Menu.Item>
      );
    };

    const generateSubmenu = (items: types.MenuBaseType[]) => items.map(menuItem => generateItem(menuItem));

    return menuData.map(menuItem => {
      if ("children" in menuItem && menuItem.children) {
        const subMenuTitle = (
          <span key={menuItem.key}>
            <span className={styles.title}>{menuItem.title}</span>
            {menuItem.icon && <span className={`${menuItem.icon} ${styles.icon}`} />}
          </span>
        );
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {generateSubmenu(menuItem.children)}
          </SubMenu>
        );
      }
      return generateItem(menuItem);
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
