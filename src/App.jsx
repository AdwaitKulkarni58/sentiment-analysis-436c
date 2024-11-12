import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CoursesReviewForm from "./components/CoursesReviewForm";
import "./App.css";
import DataVisualizationDashboard from "./components/DataVisualizationDashboard";

function App() {
  return (
    <div className="main-container">
      <h1 className="main-title">Sentiment Analysis Rate UBC Courses</h1>
      <Tabs defaultActiveKey="home" className="tabs">
        <Tab eventKey="home" title="Home" className="tab-content">
          <CoursesReviewForm />
        </Tab>
        <Tab
          eventKey="data-viz"
          title="Data Visualization"
          className="tab-content"
        >
          <DataVisualizationDashboard />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
