import React from "react";

function Product(props) {
  return (
    <div>
      <h2>Name : {props.product.name}</h2>
      <h2>
        Price:{" "}
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </h2>
      <h3>{props.product.description}</h3>
    </div>
  );
}
export default Product;
