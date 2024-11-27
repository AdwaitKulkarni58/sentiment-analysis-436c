import "./DataVisualizationDashboard.css";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PieChartComponent from "./PieChart";
import WordCloudComponent from "./WordCloud";
import ScoreCardComponent from "./ScoreCard";
import BarChartComponent from "./BarChartComponent";

function DataVisualizationDashboard() {
  const initialState = {
    pie_chart_data: [],
    word_cloud_data: [],
    score_data: null,
    summary_data: null,
    bar_chart_data: null,
  };

  const [sentimentCounts, setSentimentCounts] = useState(initialState);

  const [barChartData, setBarChartData] = useState(null);

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
      //console.log(data);
      setSentimentCounts(data);
      setBarChartData(data.bar_chart_data);
      console.log(sentimentCounts);
      //console.log(data);
    } catch (err) {
      console.log(err.message);
      setSentimentCounts(initialState);
    }
  };

  const chartData = Object.keys(sentimentCounts.pie_chart_data).map((key) => ({
    name: key,
    value: sentimentCounts.pie_chart_data[key],
  }));

  // TODO: to fetch from endpoint
  // const words = [
  //   { text: 'Good', value: 100 },
  //   { text: 'Easy', value: 60 },
  //   { text: 'Difficult', value: 10 },
  //   { text: 'Useful', value: 80 },
  //   { text: 'Homework', value: 30 },
  // ];

  const score = sentimentCounts.score_data;
  const summary = sentimentCounts.summary_data;

  return (
    <>
      <div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="Course">
              <Form.Label>Choose a course</Form.Label>
              <Form.Select
                onChange={handleCourseChange}
                className="select-course"
              >
                <option value="CPSC100">CPSC 100</option>
                <option value="CPSC103">CPSC 103</option>
                <option value="CPSC107">CPSC 107</option>
                <option value="CPSC110">CPSC 110</option>
                <option value="CPSC121">CPSC 121</option>
                <option value="CPSC203">CPSC 203</option>
                <option value="CPSC210">CPSC 210</option>
                <option value="CPSC213">CPSC 213</option>
                <option value="CPSC221">CPSC 221</option>
                <option value="CPSC259">CPSC 259</option>
                <option value="CPSC302">CPSC 302</option>
                <option value="CPSC303">CPSC 303</option>
                <option value="CPSC304">CPSC 304</option>
                <option value="CPSC310">CPSC 310</option>
                <option value="CPSC311">CPSC 311</option>
                <option value="CPSC312">CPSC 312</option>
                <option value="CPSC313">CPSC 313</option>
                <option value="CPSC314">CPSC 314</option>
                <option value="CPSC317">CPSC 317</option>
                <option value="CPSC319">CPSC 319</option>
                <option value="CPSC320">CPSC 320</option>
                <option value="CPSC322">CPSC 322</option>
                <option value="CPSC330">CPSC 330</option>
                <option value="CPSC340">CPSC 340</option>
                <option value="CPSC344">CPSC 344</option>
                <option value="CPSC368">CPSC 368</option>
                <option value="CPSC404">CPSC 404</option>
                <option value="CPSC406">CPSC 406</option>
                <option value="CPSC410">CPSC 410</option>
                <option value="CPSC416">CPSC 416</option>
                <option value="CPSC418">CPSC 418</option>
                <option value="CPSC420">CPSC 420</option>
                <option value="CPSC421">CPSC 421</option>
                <option value="CPSC422">CPSC 422</option>
                <option value="CPSC425">CPSC 425</option>
                <option value="CPSC427">CPSC 427</option>
                <option value="CPSC430">CPSC 430</option>
                <option value="CPSC436a">CPSC 436a</option>
                <option value="CPSC436c">CPSC 436c</option>
                <option value="CPSC436e">CPSC 436e</option>
                <option value="CPSC436n">CPSC 436n</option>
                <option value="CPSC436r">CPSC 436r</option>
                <option value="CPSC436s">CPSC 436s</option>
                <option value="CPSC440">CPSC 440</option>
                <option value="CPSC444">CPSC 444</option>
                <option value="CPSC447">CPSC 447</option>
                <option value="CPSC448a">CPSC 448a</option>
                <option value="CPSC448b">CPSC 448b</option>
                <option value="CPSC449">CPSC 449</option>
                <option value="CPSC504">CPSC 504</option>
                <option value="CPSC508">CPSC 508</option>
                <option value="CPSC509">CPSC 509</option>
                <option value="CPSC521">CPSC 521</option>
                <option value="CPSC524">CPSC 524</option>
                <option value="CPSC532c">CPSC 532c</option>
                <option value="CPSC532d">CPSC 532d</option>
                <option value="CPSC532v">CPSC 532v</option>
                <option value="CPSC532y">CPSC 532y</option>
                <option value="CPSC533v">CPSC 533v</option>
                <option value="CPSC533y">CPSC 533y</option>
                <option value="CPSC536e">CPSC 536e</option>
                <option value="CPSC536m">CPSC 536m</option>
                <option value="CPSC536w">CPSC 536w</option>
                <option value="CPSC538g">CPSC 538g</option>
                <option value="CPSC538l">CPSC 538l</option>
                <option value="CPSC538s">CPSC 538s</option>
                <option value="CPSC539b">CPSC 539b</option>
                <option value="CPSC539s">CPSC 539s</option>
                <option value="CPSC540">CPSC 540</option>
                <option value="CPSC543">CPSC 543</option>
                <option value="CPSC544">CPSC 544</option>
                <option value="CPSC545">CPSC 545</option>
                <option value="CPSC548">CPSC 548</option>
                <option value="CPSC550">CPSC 550</option>
                <option value="CPSC554x">CPSC 554x</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        {sentimentCounts.score_data ? (
          <div className="viz-container">
            <ScoreCardComponent score={score} summary={summary} />
            <PieChartComponent chartData={chartData} />
            <WordCloudComponent words={sentimentCounts.word_cloud_data} />
            {barChartData && <BarChartComponent data={barChartData} />}
          </div>
        ) : (
          <p>No data for this course, please choose another one.</p>
        )}
      </div>
    </>
  );
}

export default DataVisualizationDashboard;
