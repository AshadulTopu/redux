import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";

export default function CounterView() {
  const count = useSelector((state) => state.counter).count;
  //   console.log(count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncreaseByAmount = () => {
    dispatch(incrementByAmount(5));
  };
  return (
    <div>
      <h1>Counter View</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncreaseByAmount}>Increment 5</button>
    </div>
  );
}
