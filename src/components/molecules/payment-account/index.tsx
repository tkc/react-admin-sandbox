import React from "react";
import styles from "./style.module.scss";

export interface OwnState {}

export interface PaymentAccountProps {
  icon: string;
  number: string;
  sum: string;
  footer: string;
}

class PaymentAccount extends React.Component<PaymentAccountProps, OwnState> {
  constructor(props: PaymentAccountProps) {
    super(props);
  }
  render() {
    return (
      <a href="" className={`card card--withShadow ${styles.account}`}>
        {this.props.icon && (
          <div className={styles.icon}>
            <i className={this.props.icon} />
          </div>
        )}
        {this.props.number && <span className={styles.number}>{this.props.number}</span>}
        {this.props.sum && <span className={styles.sum}>{this.props.sum}</span>}
        {this.props.footer && <div className={styles.footer}>{this.props.footer}</div>}
      </a>
    );
  }
}

export default PaymentAccount;
