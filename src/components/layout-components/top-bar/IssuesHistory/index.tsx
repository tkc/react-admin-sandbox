import React from "react";
import { Menu, Dropdown } from "antd";
import { FormattedMessage } from "react-intl";
import styles from "./style.module.scss";

class IssuesHistory extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>Current search</Menu.Item>
        <Menu.Item>Search for issues</Menu.Item>
        <Menu.Divider />
        <Menu.ItemGroup title="Opened">
          <Menu.Item>
            <i className={`${styles.menuIcon} icmn-checkmark`} />
            CLNUI-253 Project implemen...
          </Menu.Item>
          <Menu.Item>
            <i className={`${styles.menuIcon} icmn-checkmark`} />
            CLNUI-234 Active history iss...
          </Menu.Item>
          <Menu.Item>
            <i className={`${styles.menuIcon} icmn-clock`} />
            CLNUI-424 Ionicons intergrat...
          </Menu.Item>
          <Menu.Item>More..</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.ItemGroup title="Filters">
          <Menu.Item>My open issues</Menu.Item>
          <Menu.Item>Reported by me</Menu.Item>
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
          <i className={`${styles.icon} icmn-folder-open`} />
          <span className="d-none d-xl-inline">
            <strong>
              <FormattedMessage id="topBar.issuesHistory" />
            </strong>
          </span>
        </div>
      </Dropdown>
    );
  }
}

export default IssuesHistory;
