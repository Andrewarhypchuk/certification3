import React from "react";
import SampleTask2 from "./Components/SampleTask2";
import SampleTask3 from "./Components/SampleTask3";
import SampleTask1 from "./Components/SampleTask1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Task 1</h2>
        <SampleTask1 />
        <h2>Task 2</h2>
        <SampleTask2 />
        <h2>Task 3</h2>
        <div className="d-flex">
          {" "}
          <SampleTask3
            api={"https://fakestoreapi.com/users"}
            searchProperty={"username"}
          />
          <SampleTask3
            api={"https://fakestoreapi.com/products"}
            searchProperty={"title"}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
