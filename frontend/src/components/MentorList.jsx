import React, { useState, useEffect } from "react";
import axios from "axios";

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/mentors");
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setError("Error fetching mentors. Please try again.");
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <h2>Mentor List</h2>
      {error && <p>{error}</p>}
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor._id}>{mentor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
