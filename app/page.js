"use client";

import RadarVEFS from "../components/RadarVEFS";
import TableVEFS from "../components/TableVEFS";
import exampleData from "../data/exampleData";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <h1>VEFS — Impacto en VAN (Ejemplo)</h1>
      <p>
        Así se ven los riesgos invisibles cuando se traducen en impacto económico real.
      </p>

      <RadarVEFS data={exampleData} />
      <TableVEFS data={exampleData} />

      <Link href="/calculate">
        <button style={{ marginTop: 24 }}>
          Calcule los impactos VAN de su organización
        </button>
      </Link>
    </main>
  );
}
