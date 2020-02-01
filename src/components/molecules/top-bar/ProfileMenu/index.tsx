import React from "react";
import { Menu, Dropdown, Avatar, Badge } from "antd";
import styles from "./style.module.scss";
import * as models from "types/models";

export interface OwnState {}

export interface ProfileMenuProps {
  user: models.User;
  badgeCount: number;
  logout: () => void;
}

export function ProfileMenu(props: ProfileMenuProps) {
  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <div>
          <strong>Name : </strong>
          {props.user.name}
        </div>
        <div>
          <strong>Role : </strong>
          {props.user.role}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <div>
          <strong>Email : </strong>
          {props.user.email}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href="" onClick={props.logout}>
          <i className={`${styles.menuIcon} icmn-exit`} />
          logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div className={styles.dropdown}>
        <Badge count={props.badgeCount}>
          <Avatar className={styles.avatar} shape="square" size="large" icon="user" />
        </Badge>
      </div>
    </Dropdown>
  );
}
