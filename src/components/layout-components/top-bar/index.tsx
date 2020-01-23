import React from "react";
import { HomeMenu } from "./HomeMenu";
import { ProfileMenu, ProfileMenuProps } from "./ProfileMenu";
import styles from "./style.module.scss";

export interface TopBarProps {
  profileMenuProps: ProfileMenuProps;
}

export function TopBar(props: TopBarProps) {
  return (
    <div className={styles.topbar}>
      <div className="mr-4">
        <HomeMenu />
      </div>
      <div className="mr-4">
        <ProfileMenu {...props.profileMenuProps} />
      </div>
    </div>
  );
}
