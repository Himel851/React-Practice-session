import React from "react";
import { useState } from "react";
import dummyData from "./MOCK_DATA.json";

const SearchTable = () => {
  const [data, setData] = useState(dummyData);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search Here"
          className="form-control"
          style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <table className="table table-bordered">
          <thead className="thead-dark">
            <th>First Name </th>
            <th>Last Name </th>
            <th>Email</th>
            <th>Gender</th>
          </thead>
          <tbody>
            {data
              .filter((filterValue) => {
                if (search === "") {
                  return filterValue; //return all value
                } else if (
                  filterValue.first_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  filterValue.last_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  filterValue.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return filterValue;
                }
              })
              .map((value) => (
                <tr key={value.id}>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchTable;
