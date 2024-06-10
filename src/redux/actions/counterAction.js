import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

export { incrementAction, decrementAction, resetAction };
