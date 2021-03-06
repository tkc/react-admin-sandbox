import React from "react";
import * as types from "types/appType";
import { Button } from "antd";
import { Pagination } from "antd";
import styles from "./style.module.scss";

import { AutoSizer, Column, Table, Index, TableCellProps, TableHeaderProps } from "react-virtualized";

const details =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const list: types.CompanyTableRowType[] = [
  {
    id: 1,
    name: "Name 1",
    address: "address",
    details,
  },
  {
    id: 2,
    name: "Name 2",
    address: "address",
    details,
  },
  {
    id: 3,
    name: "Name 3",
    address: "address",
    details,
  },
  {
    id: 4,
    name: "Name 4",
    address: "address",
    details,
  },
  {
    id: 5,
    name: "Name 1",
    address: "address",
    details,
  },
  {
    id: 6,
    name: "Name 2",
    address: "address",
    details,
  },
  {
    id: 7,
    name: "Name 3",
    address: "address",
    details,
  },
  {
    id: 8,
    name: "Name 4",
    address: "address",
    details,
  },
  {
    id: 9,
    name: "Name 1",
    address: "address",
    details,
  },
  {
    id: 10,
    name: "Name 2",
    address: "address",
    details,
  },
  {
    id: 11,
    name: "Name 3",
    address: "address",
    details,
  },
  {
    id: 12,
    name: "Name 4",
    address: "address",
    details,
  },
];

export const AccountTable = () => {
  const rowGetter = ({ index }: Index) => list[index % list.length];

  const headerRenderer = (props: TableHeaderProps) => {
    return <div>{props.label}</div>;
  };

  const cellButtonRenderer = (props: TableCellProps) => {
    const { columnIndex, rowData } = props;
    return (
      <Button
        type="primary"
        htmlType="submit"
        style={{ cursor: "pointer" }}
        onClick={() => {
          alert(rowData.id);
        }}
        key={columnIndex}
      >
        Edit
      </Button>
    );
  };

  return (
    <>
      <div style={{ height: "500PX" }}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              headerHeight={50}
              height={height}
              overscanRowCount={100}
              rowHeight={70}
              rowGetter={rowGetter}
              rowCount={list.length}
              width={width}
            >
              <Column
                headerClassName={styles.title}
                label=""
                cellDataGetter={({ rowData }) => rowData.length}
                cellRenderer={cellButtonRenderer}
                dataKey=""
                width={100}
                headerRenderer={headerRenderer}
              />
              <Column headerClassName={styles.title} dataKey="name" label="Name" width={100} />
              <Column headerClassName={styles.title} dataKey="address" label="Address" width={200} />
              <Column headerClassName={styles.title} dataKey="details" label="Details" width={800} />
            </Table>
          )}
        </AutoSizer>
      </div>
      <div className={styles.pagination}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};
