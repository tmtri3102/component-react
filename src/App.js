// import "./App.css";
// import Welcome from "./components/Welcome";
// import ClassComponent from "./components/ClassComponent";
// import FunctionComponent from "./components/FunctionComponent";

// function App() {
//   return (
//     <div className="App">
//       <Welcome name="Sara" />
//       <ClassComponent firstNumber={10} secondNumber={20} />
//       <FunctionComponent firstNumber={10} secondNumber={20} />
//     </div>
//   );
// }

// export default App;
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <button onClick={this.decrease}>Decrease</button>
        <span style={{ padding: 10 }}>{this.state.number}</span>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default App;
