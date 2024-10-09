import React, {useState} from "react";
function App() {
  const [value, setValue] = useState(1);

  function addValue() {
    setValue(value + 1);
  }

  function removeValue() {
      setValue(value - 1);
  }

  return (
      <div>
          <div>Value: {value}</div>
          <button onClick={addValue}>Add value</button>
          <button onClick={removeValue}>Remove value</button>
      </div>
  );
}

export default App;
