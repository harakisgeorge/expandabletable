import React from "react";

export const TableRow = ({ personDetails }) => {
  return (
    <tr>
      <td></td>
      <td>{personDetails.email}</td>
      <td>{personDetails.name}</td>
      <td>{personDetails.phone}</td>
      <td>{personDetails.country}</td>
      <td>{personDetails.alphanumeric}</td>
    </tr>
  );
};
