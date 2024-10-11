import React, {useRef} from "react";
function App() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

  return (
      <div>
          <input ref={inputRef} type="text"/>
          <button onClick={focusInput}>Фокус на поле вводу</button>
      </div>
  );
}

export default App;
