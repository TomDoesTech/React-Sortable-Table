import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortableTable from "./components/SortableTable";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <SortableTable data={data} />
    </div>
  );
}

export default App;
