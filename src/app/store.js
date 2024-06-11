import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/post/postSlice'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        // todos: todoReducer,
        posts: postReducer,
    }
})

export default store