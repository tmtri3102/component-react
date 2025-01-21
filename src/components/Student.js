import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      newStudent: {
        name: "",
        age: "",
        grade: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newStudent: {
        ...prevState.newStudent,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      students: [...prevState.students, prevState.newStudent],
      newStudent: {
        name: "",
        age: "",
        grade: "",
      },
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Student Management</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={this.state.newStudent.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Age"
              value={this.state.newStudent.age}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="grade"
              className="form-control"
              placeholder="Grade"
              value={this.state.newStudent.grade}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </form>

        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
