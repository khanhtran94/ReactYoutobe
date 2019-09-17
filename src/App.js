import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import TodoItem from "./components/TodoItem";
//import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokeDate from "./jokeDate";
import productData from "./vschoolProuducts";
import Product from "./components/Product";
function App() {
  jokeDate.map(joke => {
    return <Joke question={joke.question} answer={joke.ansert} />;
  });
  const jokeComponents = jokeDate.map(joke => (
    <Joke key={joke.id} question={joke.question} answer={joke.answer} />
  ));

  const productComponents = productData.map(item => (
    <Product key={item.id} product={item} />
  ));
  return <div>{productComponents}</div>;
}
export default App;
