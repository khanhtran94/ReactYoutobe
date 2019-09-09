import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
function App() {
  return (
    <div>
      <ContactCard name="khanh" phone="0392302323" address="hn, viet nam" />
      <ContactCard name="khanh123" phone="1111111" address="vinh, viet nam" />
    </div>
  );
}
export default App;
