const Table = ({ columns, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((name, key) => (
            <th key={key}>
              <span>{name}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => (
          <tr key={key}>
            {row.values.map((v, i) => (
              <td key={i}>
                <span>{v}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
