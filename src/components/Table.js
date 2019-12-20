import React from "react";
import "./Table.css";

const Table = ({ headings, data }) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {headings.map(heading => (
            <th key={heading.key}>{heading.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {headings.map(heading => (
              <td key={heading.key}>{item[heading.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
