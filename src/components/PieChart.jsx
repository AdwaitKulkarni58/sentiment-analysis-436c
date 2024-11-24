import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PieChartComponent({ chartData }) {
  const colors = ["#95d5b2", "#f07167", "#ffe066", "#6cbeed"];

  return (
    <>
      {chartData.length > 0 ? (
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            innerRadius={60}
            paddingAngle={5}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p>No data available for this course</p>
      )}
    </>
  );
}

export default PieChartComponent;
