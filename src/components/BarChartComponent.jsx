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
import "./BarChartComponent.css";

function BarChartComponent({ data }) {
  const chartData = [
    { sentiment: "Positive", positive: data.avg_positive },
    { sentiment: "Negative", negative: data.avg_negative },
    { sentiment: "Neutral", neutral: data.avg_neutral },
    { sentiment: "Mixed", mixed: data.avg_mixed },
  ];

  return (
    <div>
      <span className="title">Average Sentiment Scores</span>
      <br></br>
      <span className="subtext">
        Displays the average scores for each sentiment category: Positive,
        Negative, Mixed, Neutral
      </span>
      <BarChart
        width={600}
        height={400}
        data={chartData}
        barCategoryGap="20%"
        barGap={2}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sentiment" />
        <YAxis
          domain={[0, 1]}
          label={{
            value: "Sentiment Score",
            angle: -90,
            position: "insideLeft",
            dy: 60,
          }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="positive" fill="#95d5b2" barSize={100} />
        <Bar dataKey="negative" fill="#f07167" barSize={50} />
        <Bar dataKey="neutral" fill="#ffe066" barSize={50} />
        <Bar dataKey="mixed" fill="#6cbeed" barSize={50} />
      </BarChart>
    </div>
  );
}

export default BarChartComponent;
