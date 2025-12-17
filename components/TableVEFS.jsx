"use client";

export default function TableVEFS({ data, editable = false, setData }) {
  const handleChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = Number(value);
    if (setData) setData(newData); // protección anti-crash
  };

  return (
    <table border="1" cellPadding="6" style={{ marginTop: 24 }}>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Supuesto</th>
          <th>Realidad</th>
          <th>Peso Estratégico</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.variable}</td>
            <td>
              {editable ? (
                <input
                  type="number"
                  value={row.supuesto}
                  onChange={(e) =>
                    handleChange(i, "supuesto", e.target.value)
                  }
                />
              ) : (
                row.supuesto
              )}
            </td>
            <td>
              {editable ? (
                <input
                  type="number"
                  value={row.realidad}
                  onChange={(e) =>
                    handleChange(i, "realidad", e.target.value)
                  }
                />
              ) : (
                row.realidad
              )}
            </td>
            <td>{row.peso}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
