import React from "react";
import { Menu, Dropdown } from "antd";
import { FormattedMessage } from "react-intl";
import styles from "./style.module.scss";

class ProjectManagement extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false}>
        <Menu.ItemGroup title="Active">
          <Menu.Item>Project Management</Menu.Item>
          <Menu.Item>User Interface Development</Menu.Item>
          <Menu.Item>Documentation</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Inactive">
          <Menu.Item>Marketing</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.Item>
          <i className={`${styles.menuIcon} icmn-cog`} /> Settings
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
        <div className={styles.dropdown}>
          <i className={`${styles.icon} icmn-database`} />
          <span className="d-none d-xl-inline">
            <strong>
              <FormattedMessage id="topBar.projectManagement" />
            </strong>
          </span>
        </div>
      </Dropdown>
    );
  }
}

export default ProjectManagement;
