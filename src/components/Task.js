import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }
  handleInputChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleAddItem = (e) => {
    e.preventDefault();
    if (this.state.item !== "") {
      this.setState({
        list: [...this.state.list, this.state.item],
        item: "",
      });
    }
  };
  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Task Management</h2>
        <form onSubmit={this.handleAddItem}>
          <div className="mb-3">
            <input
              type="text"
              name="item"
              className="form-control"
              placeholder="Add Task"
              value={this.state.item}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
        <ul className="list-group mt-3">
          {this.state.list.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Task;
