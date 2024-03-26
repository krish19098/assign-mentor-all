// ShowStudentsForMentorComponent.jsx
import React, { useState } from "react";
import axios from "axios";

const ShowStudentsForMentorComponent = () => {
  const [mentorId, setMentorId] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setMentorId(e.target.value);
  };

  const handleGetStudentsForMentor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/mentors/${mentorId}/students`
      );
      setStudents(response.data.students); // Update to access the students array
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError("Error fetching students. Please try again.");
    }
  };

  return (
    <div>
      <h2>Show Students for Mentor</h2>
      <input
        type="text"
        value={mentorId}
        onChange={handleInputChange}
        placeholder="Enter Mentor ID"
      />
      <button onClick={handleGetStudentsForMentor}>
        Get Students for Mentor
      </button>
      {error && <p>{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowStudentsForMentorComponent;
