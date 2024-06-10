import { useState } from "react";
// counter app with useState
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h3>count: {count}</h3>

      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
