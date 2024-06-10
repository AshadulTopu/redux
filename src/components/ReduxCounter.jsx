// 1. state - count : 0
// 2. action - increment, decrement, reset
// 3. reducer - increment, decrement, reset
// increment = (prevCount) => prevCount + 1
// decrement = (prevCount) => prevCount - 1
// reset = () => 0
// 4. store - reducer
// 5. provider - store
// 6. use - store

import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../redux/actions/counterAction";

export default function ReduxCounter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  // console.log(count);
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleReset = () => {
    dispatch(resetAction());
  };
  return (
    <div>
      <h1>Redux Counter App</h1>
      <h3>count: {count}</h3>

      <button onClick={handleIncrement}>increment</button>

      <button onClick={handleDecrement}>decrement</button>

      <button onClick={handleReset}>reset</button>
    </div>
  );
}
