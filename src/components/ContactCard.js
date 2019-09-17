import React from "react";

function ContactCard(props) {
  //console.table(props);
  //console.log(props);
  console.count(props.contact.name);
  return (
    <div>
      <h3>{props.contact.name}</h3>
      <p>phone: {props.contact.phone}</p>
      <p>address: {props.contact.address}</p>
    </div>
  );
}
export default ContactCard;
