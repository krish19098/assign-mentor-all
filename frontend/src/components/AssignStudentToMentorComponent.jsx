import React from "react";
import axios from "axios";

const AssignStudentToMentorComponent = () => {
  const handleAssignStudentToMentor = async () => {
    try {
      const response = await axios.post("http://localhost:3000/students", {
        /* data */
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Assign Student to Mentor</h2>
      <button onClick={handleAssignStudentToMentor}>
        Assign Student to Mentor
      </button>
    </div>
  );
};

export default AssignStudentToMentorComponent;
