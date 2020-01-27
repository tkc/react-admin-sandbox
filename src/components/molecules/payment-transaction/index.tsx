import React from "react";
import styles from "./style.module.scss";

export interface OwnState {}

export interface PaymentTransactionProps {
  income: boolean;
  amount: string;
  info: string;
  footer: string;
}

function PaymentTransaction(props: PaymentTransactionProps) {
  return (
    <a href="" className={`${styles.paymentTransaction} card card--withShadow ${props.income ? styles.income : ""}`}>
      <div className={styles.icon}>
        <i className={props.income ? "lnr lnr-arrow-left" : "lnr lnr-arrow-right"} />
      </div>
      {props.amount && (
        <div>
          <span className={styles.amount}>{props.amount}</span>
          {props.amount && <sup className={styles.info}>{props.info}</sup>}
        </div>
      )}
      {props.footer && <div className={styles.footer}>{props.footer}</div>}
    </a>
  );
}

export default PaymentTransaction;
