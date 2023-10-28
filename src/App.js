import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar.js";
import CourseCard from "./Components/CourseCard.js";
function App() {
  const [texta, setText] = useState("Title");

  // Assuming you want to display 3 cards in each row, you can adjust the values based on your requirements
  const cards = Array.from({ length: 9}, (_, index) => <CourseCard key={index} />);

  return (
    <div>
      <Navbar title={texta} />
      <div style={cardContainerStyle}>{cards}</div>
    </div>
  );
}

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
};

export default App;
