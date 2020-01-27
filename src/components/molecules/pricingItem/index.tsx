import React from "react";
// import item from "./data.json";
import styles from "./style.module.scss";

export interface PricingItemProps {
  data: any;
  extended: string;
  type: string;
}

function PricingItem(props: PricingItemProps) {
  return (
    <div className={`${styles.item}  ${props.extended ? styles.extended : ""}`}>
      <div className={styles.header}>
        <div className={styles.price}>
          <span className={styles.currency}>{props.data.currency}</span>
          <span className={styles.amount}>{props.data.amount}</span>
          <span className={styles.period}>{props.data.period}</span>
        </div>
        <div className={styles.title}>{props.data.title}</div>
      </div>
      <ul className={styles.features}>
        {props.data.features.map((feature: any) => (
          <li key={feature.id}>
            <strong>{feature.main}</strong> {feature.descr}
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <a href="javascript: void(0);" className="btn" role="button">
          <i className="icmn-download mr-3" aria-hidden="true" />
          {props.data.btnText}
        </a>
      </div>
    </div>
  );
}

export default PricingItem;
