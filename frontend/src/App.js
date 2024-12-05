import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import Results from "./components/Results";
import "./index.css";

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div className="App">
      <h1>Agricultural Water Usage Calculator</h1>
      <CalculatorForm setResults={setResults} />
      {results && <Results results={results} />}
    </div>
  );
};

export default App;
