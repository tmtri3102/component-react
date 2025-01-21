import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Student extends Component {
  students = [
    { id: 1, name: "John", age: 24, address: "USA" },
    { id: 2, name: "Jane", age: 23, address: "CAD" },
    { id: 3, name: "Paul", age: 26, address: "UK" },
  ];

  render() {
    const { id, name, age, address } = this.students;
    return (
      <>
        <table border={1} className="table table-striped my-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.students.map((index) => (
              <tr key={index}>
                <td>{index.id}</td>
                <td>{index.name}</td>
                <td>{index.age}</td>
                <td>{index.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default Student;
