import React from "react";
import Logo from "./Logo/Logo";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <Logo />
      </nav>
    );
  }
}

export default Header;
