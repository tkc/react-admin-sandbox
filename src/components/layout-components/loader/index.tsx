import React from "src/components/layout-components/loader/node_modules/react";
import classNames from "src/components/layout-components/loader/node_modules/classnames";
import styles from "./style.module.scss";

const Loader = ({ spinning = true, fullScreen }) => (
  <div
    className={classNames(styles.loader, {
      [styles.hidden]: !spinning,
      [styles.fullScreen]: fullScreen,
    })}
  />
);

export default Loader;
