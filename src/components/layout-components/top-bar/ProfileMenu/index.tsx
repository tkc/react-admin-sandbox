import React from "react";
import { Menu, Dropdown, Avatar, Badge } from "antd";
import styles from "./style.module.scss";
import * as types from "types";

export interface OwnState {}

export interface ProfileMenuProps {
  user: types.UserType;
  badgeCount: number;
  logout: () => void;
}

export class ProfileMenu extends React.Component<ProfileMenuProps, OwnState> {
  constructor(props: ProfileMenuProps) {
    super(props);
  }

  render() {
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <div>
            <strong>Name : </strong>
            {this.props.user.name}
          </div>
          <div>
            <strong>Role : </strong>
            {this.props.user.role}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <div>
            <strong>Email : </strong>
            {this.props.user.email}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="" onClick={this.props.logout}>
            <i className={`${styles.menuIcon} icmn-exit`} />
            logout
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className={styles.dropdown}>
          <Badge count={this.props.badgeCount}>
            <Avatar className={styles.avatar} shape="square" size="large" icon="user" />
          </Badge>
        </div>
      </Dropdown>
    );
  }
}
