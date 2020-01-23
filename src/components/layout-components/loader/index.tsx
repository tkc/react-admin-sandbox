import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const Loader = ({ spinning = true, fullScreen }: { spinning: boolean; fullScreen: boolean }) => (
  <div
    className={classNames(styles.loader, {
      [styles.hidden]: !spinning,
      [styles.fullScreen]: fullScreen,
    })}
  />
);

export default Loader;
