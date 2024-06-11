import "./App.css";
import CounterView from "./components/CounterView";
import PostView from "./components/PostView";

export default function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <CounterView />
      <PostView />
    </div>
  );
}
