import React, { useState, useEffect } from "react";
import ProgressBar from "../components/progress-bar.component";

function Skills() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <div className='condiv skills'>
      <h1>My Skills</h1>
      <br/>
      <h2>HTML</h2> <ProgressBar bgcolor={"#6a1b9a"} completed={70} />
      <h2>CSS</h2> <ProgressBar bgcolor={"#0000FF"} completed={50} />
      <h2>JAVASCRIPT</h2> <ProgressBar bgcolor={"#00FF00"} completed={50} />
      <h2>BOOTSTRAP</h2> <ProgressBar bgcolor={"#00FFFF"} completed={50} />
      <h2>REACT</h2> <ProgressBar bgcolor={"#FFD700"} completed={50} />
      <h2>VUEJS</h2> <ProgressBar bgcolor={"#000080"} completed={60} />
      <h2>PYTHON</h2> <ProgressBar bgcolor={"#FF4500"} completed={50} />
      
      </div>
    </div>
  );
}

export default Skills;