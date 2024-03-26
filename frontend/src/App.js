// src/App.js

import React from "react";
import "./App.css";
import MentorList from "./components/MentorList";
import StudentList from "./components/StudentList";
import DataInteractionComponent from "./components/DataInteraction";
import ShowStudentsForMentorComponent from "./components/ShowStudentsForMentorComponent";
import ShowPreviousMentorForStudentComponent from "./components/ShowPreviousMentorForStudentComponent";

function App() {
  return (
    <div className="App">
      <MentorList />
      <StudentList />
      <DataInteractionComponent />
      <ShowStudentsForMentorComponent />
      <ShowPreviousMentorForStudentComponent />
    </div>
  );
}

export default App;
