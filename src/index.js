import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const students = [
  { name: "John", age: 24 },
  { name: "Jane", age: 23 },
  { name: "Paul", age: 26 },
];
// function App() {
//   // return <Headline value="Hello, World!" />;
//   return (
//     <div>
//       {students.map((student, index) => (
//         <Headline key={index} name={student.name} age={student.age} />
//       ))}
//     </div>
//   );
// }
// function Headline({student}) {...student.name}
// function Headline(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>
//         Hello {props.name}, {props.age}
//       </h1>
//     </>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {students.map((student, index) => (
//           <Headline key={index} name={student.name} age={student.age} />
//         ))}
//       </div>
//     );
//   }
// }

// class Headline extends Component {
//   render() {
//     const { name, age } = this.props;
//     return (
//       <>
//         <h1>
//           Hello {name}, {age}
//         </h1>
//       </>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
);
reportWebVitals();
