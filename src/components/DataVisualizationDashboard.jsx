import "./DataVisualizationDashboard.css";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PieChartComponent from "./PieChart";
import WordCloudComponent from "./WordCloud";
import ScoreCardComponent from "./ScoreCard";

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

  // TODO: to fetch from endpoint
  const words = [
    { text: 'Good', value: 100 },
    { text: 'Easy', value: 60 },
    { text: 'Difficult', value: 10 },
    { text: 'Useful', value: 80 },
    { text: 'Homework', value: 30 },
  ];

  // TODO: to fetch from endpoint
  const score = 4.2
  const summary = "here be summary"

  return (
    <div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="Course">
            <Form.Label>Choose a course</Form.Label>
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
      <div className="viz-container">
        <ScoreCardComponent score={score} summary={summary} />
        <PieChartComponent chartData={chartData} />
        <WordCloudComponent words={words} />
      </div>
    </div>
  );
}

export default DataVisualizationDashboard;
