import React from "react";
// import Footer from "./components/Footer";
import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import TodoItem from "./components/TodoItem";
//import ContactCard from "./components/ContactCard";
//import Joke from "./components/Joke";
// import jokeDate from "./jokeDate";
// import productData from "./vschoolProuducts";
// import Product from "./components/Product";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todosData";

// function App() {
//   const itemComponent = todosData.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   return <div>{itemComponent}</div>;
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="khanh 123" />
      </div>
    );
  }
}
export default App;
