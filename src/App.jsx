import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CoursesReviewForm from "./components/CoursesReviewForm";
import DataVisualizationDashboard from "./components/DataVisualizationDashboard";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [courseDataViz, setCourseDataViz] = useState("");

  return (
    <div className="main-container">
      <h1 className="main-title">Sentiment Analysis Rate UBC Courses</h1>
      <Tabs
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="tabs"
      >
        <Tab eventKey="home" title="Home" className="tab-content">
          <CoursesReviewForm
            onSubmitChangeTab={() => setActiveTab("data-viz")}
            setCourseDataViz={setCourseDataViz}
          />
        </Tab>
        <Tab
          eventKey="data-viz"
          title="Data Visualization"
          className="tab-content"
        >
          <DataVisualizationDashboard
            course={courseDataViz}
            setCourseDataViz={setCourseDataViz}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
