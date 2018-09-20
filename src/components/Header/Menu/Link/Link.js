import React from "react";

class Link extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li link={this.props.link} />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Link;
