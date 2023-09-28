import "./App.css";
import TodoContainer from "../src/Context/TodoContainer";
import TodoComponent from "./Components/Todo/TodoComponent";

function App() {
  return (
    <div>
      <TodoContainer>
        <TodoComponent />
      </TodoContainer>
    </div>
  );
}

export default App;
