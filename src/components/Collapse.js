import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handletoggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <>
            <button onClick={this.handletoggle}>Hide</button>
            <p>Some text</p>
          </>
        ) : (
          <button onClick={this.handletoggle}>Show</button>
        )}
      </div>
    );
  }
}
// function Collapse({ text }) {
//   return <div>{text}</div>;
// }

export default Collapse;
