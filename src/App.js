import React from "react";
// import Footer from "./components/Footer";
//import Header from "./components/Header";
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
  constructor() {
    super();
    this.state = {
      todos: todosData,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
    console.log("click");
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id == id) {
          console.log(todo.completed);
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodos
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div>{todoItems}</div>;
  }
}
export default App;
