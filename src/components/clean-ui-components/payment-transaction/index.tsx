import React from "react";
import styles from "./style.module.scss";

export interface OwnState {}

export interface PaymentTransactionProps {
  income: boolean;
  amount: string;
  info: string;
  footer: string;
}

class PaymentTransaction extends React.Component<PaymentTransactionProps, OwnState> {
  constructor(props: PaymentTransactionProps) {
    super(props);
  }

  render() {
    return (
      <a
        href=""
        className={`${styles.paymentTransaction} card card--withShadow ${this.props.income ? styles.income : ""}`}
      >
        <div className={styles.icon}>
          <i className={this.props.income ? "lnr lnr-arrow-left" : "lnr lnr-arrow-right"} />
        </div>
        {this.props.amount && (
          <div>
            <span className={styles.amount}>{this.props.amount}</span>
            {this.props.amount && <sup className={styles.info}>{this.props.info}</sup>}
          </div>
        )}
        {this.props.footer && <div className={styles.footer}>{this.props.footer}</div>}
      </a>
    );
  }
}

export default PaymentTransaction;
