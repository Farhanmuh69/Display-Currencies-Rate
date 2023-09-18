import React from "react";
import { TableCell } from "../Atoms/TableHeader";
import { HeadTableCell } from "../Atoms/TableHeader";

const TableRow = ({ currency, weBuyRate, exchangeRate, weSellRate }) => (
  <tr>
    <HeadTableCell data={currency} />
    <TableCell data={weBuyRate} />
    <TableCell data={exchangeRate} />
    <TableCell data={weSellRate} />
  </tr>
);

export default TableRow;