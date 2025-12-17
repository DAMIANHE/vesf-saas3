"use client";

import { useState } from "react";
import RadarVEFS from "../../components/RadarVEFS";
import TableVEFS from "../../components/TableVEFS";
import exampleData from "../../data/exampleData";

export default function Calculate() {
  const [data, setData] = useState(exampleData);

  return (
    <main style={{ padding: 32 }}>
      <h1>Calcule los impactos VAN de su organización</h1>

      <p>
        Ingrese los valores de supuesto y realidad para cada variable.
      </p>

      <TableVEFS data={data} editable={true} setData={setData} />
      <RadarVEFS data={data} />

      <button
        onClick={() => window.print()}
        style={{ marginTop: 24 }}
      >
        Exportar PDF (DEMO)
      </button>
    </main>
  );
}
