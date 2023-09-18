import React from "react";
import { TableHeader } from "../Atoms/TableHeader";
import TableRow from "../Molecules/TableRow";
import { tableStyle } from "../style";



const ExchangeRateTable = ({ currencies, weBuyRates, exchangeRates, weSellRates }) => (
  <table style={tableStyle}>
    <thead>
      <tr>
        <TableHeader title="Currency" />
        <TableHeader title="We Buy" />
        <TableHeader title="Exchange Rate" />
        <TableHeader title="We Sell" />
      </tr>
    </thead>
    <tbody>
      {currencies.map((currency) => (
        <TableRow
          key={currency}
          currency={currency}
          weBuyRate={weBuyRates[currency]}
          exchangeRate={exchangeRates[currency]}
          weSellRate={weSellRates[currency]}
        />
      ))}
    </tbody>
  </table>
);

export default ExchangeRateTable;