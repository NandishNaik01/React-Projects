import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Areka Store
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
