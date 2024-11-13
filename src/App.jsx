import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CoursesReviewForm from "./components/CoursesReviewForm";
import Visualization from "./components/Visualization";
import "./App.css";
import DataVisualizationDashboard from "./components/DataVisualizationDashboard";

function App() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="main-container">
      <h1 className="main-title">Sentiment Analysis Rate UBC Courses</h1>
      <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} className="tabs">
        <Tab eventKey="home" title="Home" className="tab-content">
          <CoursesReviewForm onSubmitChangeTab={() => setActiveTab("data-viz")} />
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
