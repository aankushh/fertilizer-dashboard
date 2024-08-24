import React, { useState } from "react";
import Table from "./components/Table";
import Chart from "./components/Chart";
import TopFertilizers from "./components/TopFertilizers";
import data from "./data.json";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("table"); // State to manage active tab

  return (
    <div className="App">
      <header className="top-bar">
        <h1>Fertilizer Dashboard</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#fertilizers">Top Fertilizers</a>
          </li>
          <li>
            <a href="#table">Data Table</a>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        {/* Top Fertilizers Section in a Flex Row */}
        <div className="fertilizers-section">
          <TopFertilizers data={data} />
        </div>
        {/* Tab Buttons below the table/chart */}
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "table" ? "active" : ""}`}
            onClick={() => setActiveTab("table")}
          >
            Table
          </button>
          <button
            className={`tab-button ${activeTab === "chart" ? "active" : ""}`}
            onClick={() => setActiveTab("chart")}
          >
            Chart
          </button>
        </div>
        {/* Table and Chart Section */}
        <div className="tab-container">
          {activeTab === "table" ? (
            <div className="table-section">
              <Table rowData={data} />
            </div>
          ) : (
            <div className="chart-container">
              <Chart data={data.filter((item) => item.product === "DAP")} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
