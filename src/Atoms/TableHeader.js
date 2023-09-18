import React from "react";
import { thStyle,secondTdStyle,tdStyle } from "../style";

const HeadTableCell = ({ data }) => <th style={{ fontWeight:"bold" }}>{data}</th>;
const TableCell = ({ data, index }) => (
    <td style={{ ...tdStyle, ...(index % 2 === 0 ? secondTdStyle : {}) }}>{data}</td>
  );
const TableHeader = ({ title }) => <th style={thStyle}>{title}</th>;

export { TableCell, TableHeader,HeadTableCell }; 