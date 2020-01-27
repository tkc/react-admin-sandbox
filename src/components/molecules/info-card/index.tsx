import React from "react";
import { stats, commerceStats } from "./data.json";
import styles from "./style.module.scss";

export interface InfoCardProps {
  form: string;
  icon: boolean;
  type: string;
  btnType: string;
}

function InfoCard(props: InfoCardProps) {
  return (
    <div>
      {props.form === "stats" && (
        <div className={styles.infoCard}>
          {props.icon !== false && (
            <span className={styles.digit}>
              <i className={`icmn-${props.icon}`} />
            </span>
          )}
          <div className={styles.desc}>
            <span className={styles.title}>{stats.title}</span>
            <p>Total: {stats.count}</p>
          </div>
        </div>
      )}
      {props.form === "stats-large" && (
        <div className={styles.infoCard}>
          <h5 className="text-uppercase mb-3 text-white">{commerceStats.title}</h5>
          <div className="clearfix" />
          <div>
            <span className="pull-right font-size-36">
              <strong>{commerceStats.count}</strong>
            </span>
            {props.icon !== false && <i className={`font-size-36 icmn-${props.icon}`} />}
          </div>
        </div>
      )}
      {props.form === "interactive" && (
        <div className={`${styles.infoCard} px-3 py-5`}>
          {props.icon !== false && (
            <div className="text-center font-size-30">
              <i className={`icmn-${props.icon}`} />
            </div>
          )}
          <div className="mt-2 text-center">
            <div className="mb-2">
              <p>Lorem Ipsum is simply dummy text of printing the printing and typesetti...</p>
            </div>
            <a href="javascript: void(0);" className={`btn btn-outline-${props.btnType}`}>
              Information
            </a>
          </div>
        </div>
      )}
      {props.form === "bordered" && (
        <div className={`${styles.infoCard} ${styles.bordered}`}>
          {props.icon !== false && (
            <span className={styles.digit}>
              <i className={`icmn-${props.icon}`} />
            </span>
          )}
          <div className={styles.desc}>
            <span className={styles.title}>{stats.title}</span>
            <p>{stats.descr}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
