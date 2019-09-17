import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import TodoItem from "./components/TodoItem";
//import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
function App() {
  return (
    <div>
      <Joke question="what your name?" answer="Khanhtt2" />
      <Joke question="How are you" answer="I fine, thanks" />
      <Joke question="where are you" />
    </div>
  );
}
export default App;
