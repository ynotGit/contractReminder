import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Contract Reminder</h1>
      <form>
        <label>
          Contract
          <input type="text" name="contract" />
        </label>
        <label>
          End Date
          <input type="" name="endDate" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
