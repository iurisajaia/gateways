const Table = ({ columns, values }) => {
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
        {values.map((value, key) => (
          <tr key={key}>
            {value.values.map((v, i) => (
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
