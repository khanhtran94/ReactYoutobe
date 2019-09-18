import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1>Hello {this.props.username}</h1>
        <ul>
          <li>thing 1</li>
          <li>thing 2</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
