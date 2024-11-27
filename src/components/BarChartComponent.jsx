import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

function BarChartComponent({ data }) {
  const chartData = Object.keys(data || {}).map((key) => ({
    sentiment: key,
    positive: data[key].positive,
    negative: data[key].negative,
    neutral: data[key].neutral,
    mixed: data[key].mixed,
  }));

  return (
    <BarChart width={600} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sentiment" />
      <YAxis domain={[0, 1]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="positive" fill="#4caf50" />
      <Bar dataKey="negative" fill="#f44336" />
      <Bar dataKey="neutral" fill="#2196f3" />
      <Bar dataKey="mixed" fill="#ff9800" />
    </BarChart>
  );
}

export default BarChartComponent;