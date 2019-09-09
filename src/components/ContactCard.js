import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <p>phone: {props.phone}</p>
      <p>address: {props.address}</p>
    </div>
  );
}
export default ContactCard;
