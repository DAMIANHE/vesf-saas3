"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function RadarVEFS({ data }) {
  return (
    <RadarChart width={500} height={400} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="variable" />
      <PolarRadiusAxis />
      <Radar
        dataKey="realidad"
        stroke="#00e5ff"
        fill="#00e5ff"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
