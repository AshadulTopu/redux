import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todosReducer from "./reducers/TodosReducers";
import { thunk } from 'redux-thunk'

// const store = createStore(counterReducer);
const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;