import React, {useMemo, useState} from "react";
function App() {
    const [state, setState] = useState(1);
    const [price, setPrice] = useState(10);
    const [count, setCount] = useState(5);

    function hardCalc(price, count) {
        console.log("On");
        return price * count;
    }

    const hardRes = useMemo(() => hardCalc(price, count), [price, count]);

    return (
        <div>
            <p>State {state}</p>
            <p>Price {price}</p>
            <p>Count {count}</p>
            <p>Res: {hardRes}</p>
            <button onClick={() => setState(state + 1)}>Update state</button>
            <button onClick={() => setPrice(price + 1)}>Update state</button>
            <button onClick={() => setCount(count + 1)}>Update state</button>
        </div>
    );
}

export default App;
