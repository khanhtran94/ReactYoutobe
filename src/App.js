import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const firstName = "joint";
  const lastName = "bob";
  const date = new Date();
  const styles = {
    fontSize: 40,
    color: "#111111"
  };

  const hours = date.getHours();
  let timeDate;

  if (hours < 12) {
    timeDate = "Morning";
    styles.backgroundColor = "#ff2d00";
  } else {
    timeDate = "buoi chieu";
    styles.backgroundColor = "#ffffcc";
  }
  return (
    <div>
      <h1>hello {firstName + " " + lastName}</h1>
      <h2>hello {`${firstName} ${lastName}`}</h2>
      <p style={{ color: "#ff8c00" }}>it is {date.getHours()}</p>
      <p style={styles}>This is styles {`${timeDate}`}</p>
    </div>
  );
}
export default App;
