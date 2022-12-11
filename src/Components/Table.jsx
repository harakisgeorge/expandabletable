import React from "react";
import { info } from "../data/info.js";
import { TableSection } from "./TableSection.jsx";
export const Table = () => {
  return (
    <table>
      <thead>
        <td></td>
        <th>Email</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Country</th>
        <th>Alphanumeric</th>
      </thead>
      {info.map((personDetails, index) => (
        <TableSection personDetails={personDetails} index={index} />
      ))}
    </table>
  );
};
