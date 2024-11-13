import "./DataVisualizationDashboard.css";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PieChartComponent from "./PieChart";
import WordCloudComponent from "./WordCloud";

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
      <PieChartComponent chartData={chartData} />
      <WordCloudComponent />
    </div>
  );
}

export default DataVisualizationDashboard;
