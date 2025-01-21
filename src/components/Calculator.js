import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      result: 0,
    };
  }
  calculate = (operator) => {
    let { a, b } = this.state;
    switch (operator) {
      case "+":
        this.setState({ result: a + b });
        break;
      case "-":
        this.setState({ result: a - b });
        break;
      case "*":
        this.setState({ result: a * b });
        break;
      case "/":
        this.setState({ result: a / b });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h3>Calculator</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control mb-2"
                    value={this.state.a}
                    onChange={(e) =>
                      this.setState({ a: parseInt(e.target.value) })
                    }
                    placeholder="Enter first number"
                  />
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.b}
                    onChange={(e) =>
                      this.setState({ b: parseInt(e.target.value) })
                    }
                    placeholder="Enter second number"
                  />
                </div>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.calculate("+")}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.calculate("-")}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.calculate("*")}
                  >
                    ×
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.calculate("/")}
                  >
                    /
                  </button>
                </div>
                <div className="text-center mt-3">
                  <h3>
                    Result:{" "}
                    <span className="text-primary">{this.state.result}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
