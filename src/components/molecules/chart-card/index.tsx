import React from "react";
import style from "./style.module.scss";

export interface ChartCardProps {
  title: string;
  amount: string;
  chartProps: any;
}

function ChartCard(props: ChartCardProps) {
  return (
    <div className={`card ${style.card}`}>
      {props.chartProps && <div className={style.chart}></div>}
      {props.amount && <div className={style.amount}>{props.amount}</div>}
      {props.title && <div className={style.title}>{props.title}</div>}
    </div>
  );
}

export default ChartCard;
