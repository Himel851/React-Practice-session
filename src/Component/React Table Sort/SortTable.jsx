import React from "react";
import { useState } from "react";
import dummyData from "./MOCK_DATA.json";

const SortTable = () => {
  const [data, setData] = useState(dummyData);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("ASC");
      }
  };
  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <th>
              First Name{" "}
              <button onClick={() => sorting("first_name")}>Sort</button>
            </th>
            <th>
              Last Name{" "}
              <button onClick={() => sorting("last_name")}>Sort</button>
            </th>
            <th>
              Email <button onClick={() => sorting("email")}>Sort</button>
            </th>
          </thead>
          <tbody>
            {data.map((value) => (
              <tr key={value.id}>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SortTable;
