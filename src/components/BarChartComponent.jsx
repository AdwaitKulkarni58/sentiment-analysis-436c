import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function BarChartComponent({ data }) {
  const chartData = [
    { sentiment: "Positive", positive: data.avg_positive },
    { sentiment: "Negative", negative: data.avg_negative },
    { sentiment: "Neutral", neutral: data.avg_neutral },
    { sentiment: "Mixed", mixed: data.avg_mixed },
  ];

  return (
    <BarChart
      width={600}
      height={400}
      data={chartData}
      barCategoryGap="20%"
      barGap={2}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sentiment" />
      <YAxis domain={[0, 1]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="positive" fill="#4caf50" barSize={100} />
      <Bar dataKey="negative" fill="#f44336" barSize={50} />
      <Bar dataKey="neutral" fill="#2196f3" barSize={50} />
      <Bar dataKey="mixed" fill="#ff9800" barSize={50} />
    </BarChart>
  );
}

export default BarChartComponent;
