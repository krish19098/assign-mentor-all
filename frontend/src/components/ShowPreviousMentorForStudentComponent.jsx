import React, { useState } from "react";
import axios from "axios";

const ShowPreviousMentorForStudentComponent = () => {
  const [studentId, setStudentId] = useState("");
  const [previousMentor, setPreviousMentor] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleGetPreviousMentorForStudent = async () => {
    try {
      const response = await axios.get(
        `https://assign-mentor-all.onrender.com/students/${studentId}/previous-mentor`
      );
      setPreviousMentor(response.data.mentor); // Assuming the mentor data is nested under 'mentor' key
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError("Error fetching previous mentor. Please try again.");
    }
  };

  return (
    <div>
      <h2>Show Previous Mentor for Student</h2>
      <input
        type="text"
        value={studentId}
        onChange={handleInputChange}
        placeholder="Enter Student ID"
      />
      <button onClick={handleGetPreviousMentorForStudent}>
        Get Previous Mentor for Student
      </button>
      {error && <p>{error}</p>}
      {previousMentor && (
        <div>
          <p>Previous Mentor:</p>
          <p>ID: {previousMentor._id}</p>
          <p>Name: {previousMentor.name}</p>
          {/* Render other mentor details as needed */}
        </div>
      )}
    </div>
  );
};

export default ShowPreviousMentorForStudentComponent;
