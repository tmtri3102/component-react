import "./App.css";
import Welcome from "./components/Welcome";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <ClassComponent firstNumber={10} secondNumber={20} />
    </div>
  );
}

export default App;
