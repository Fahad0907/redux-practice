import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addBy } from "./Redux/CounterSlice";
import Todo from "./components/Todo";

function App() {
  const counter = useSelector((state) => state.p.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
