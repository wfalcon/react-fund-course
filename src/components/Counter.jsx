import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count +1)
        console.log(count)
      }
      function decrement() {
        setCount(count -1)
        console.log(count)
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter;