import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  return (
    <div>
      <Item name="shubham"></Item>
      <ItemDate day="20" month="june" year="1998"></ItemDate>
      <Item name="shubham"></Item>
      <ItemDate day="20" month="june" year="1998"></ItemDate>{" "}
      <Item name="shubham"></Item>
      <ItemDate day="20" month="june" year="1998"></ItemDate>
      <div className="App">
        <h1>hellow world</h1>
      </div>
    </div>
  );
}

export default App;
