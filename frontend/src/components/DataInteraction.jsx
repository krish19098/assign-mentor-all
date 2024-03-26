// src/components/DataInteractionComponent.js

import React, { useState } from "react";
import axios from "axios";

const DataInteractionComponent = () => {
  const [data, setData] = useState("");
  const [responseData, setResponseData] = useState("");

  const sendDataToServer = async () => {
    try {
      const response = await axios.post("/api/send-data", { data });
      setResponseData(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get("/api/fetch-data");
      setResponseData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Data Interaction Component</h2>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={sendDataToServer}>Send Data</button>
      <button onClick={fetchDataFromServer}>Fetch Data</button>
      {responseData && (
        <div>
          <h3>Response from Server:</h3>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default DataInteractionComponent;
