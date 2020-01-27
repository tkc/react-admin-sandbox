import React from "react";
import styles from "./style.module.scss";

export interface OwnState {}

export interface PaymentAccountProps {
  icon: string;
  number: string;
  sum: string;
  footer: string;
}

function PaymentAccount(props: PaymentAccountProps) {
  return (
    <a href="" className={`card card--withShadow ${styles.account}`}>
      {props.icon && (
        <div className={styles.icon}>
          <i className={props.icon} />
        </div>
      )}
      {props.number && <span className={styles.number}>{props.number}</span>}
      {props.sum && <span className={styles.sum}>{props.sum}</span>}
      {props.footer && <div className={styles.footer}>{props.footer}</div>}
    </a>
  );
}

export default PaymentAccount;
