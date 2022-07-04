import React from "react";
import { useHistory } from "react-router-dom";
import "./list.css";

const List = ({ data }) => {
  const history = useHistory();

  const onRowClick = (row) => {
    history.push(row.name, row);
  };

  return (
    <div className="container">
      <table className="table" aria-label="repo table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Language</th>
            <th>Archived</th>
            <th>Watchers</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.name} onClick={() => onRowClick(row)}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.language}</td>
              <td>{row.archived ? "Yes" : "No"}</td>
              <td>{row.watchers}</td>
              <td>{row.forks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
