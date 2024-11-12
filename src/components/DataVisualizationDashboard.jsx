import "./DataVisualizationDashboard.css";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Form } from "react-bootstrap";

function DataVisualizationDashboard() {
  const [sentimentCounts, setSentimentCounts] = useState("");

  useEffect(() => {
    fetchPieChartData("CPSC110");
  }, []);

  const handleCourseChange = (event) => {
    fetchPieChartData(event.target.value);
  };

  const fetchPieChartData = async (course) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_INVOKE_URL_PIE_CHART}${course}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setSentimentCounts(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const chartData = Object.keys(sentimentCounts).map((key) => ({
    name: key,
    value: sentimentCounts[key],
  }));

  const colors = ["#4caf50", "#f44336", "#ffeb3b", "#2196f3"];

  return (
    <div>
      Data Visualization Dashboard!
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="Course">
            <Form.Label>Course</Form.Label>
            <Form.Select
              onChange={handleCourseChange}
              className="select-course"
            >
              <option value="CPSC110">CPSC 110</option>
              <option value="CPSC210">CPSC 210</option>
              <option value="CPSC310">CPSC 310</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
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
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default DataVisualizationDashboard;
