
// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

const { createStore, applyMiddleware } = require("redux")
const { thunk } = require("redux-thunk")
const axios = require("axios")


// constant variable
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE"
const API_URL = "https://jsonplaceholder.typicode.com/todos"


// state
const initialTodoState = {
    isLoading: false,
    isError: null,
    todos: [],
}

// action

const getTodos = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (data) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: data
    }
}

const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error
    }
}


// reducer
const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return state;
    }
}


// async actions creator - api calling

const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(getTodos())
        try {
            // const response = await fetch(API_URL)
            // const data = await response.json()
            const response = await axios.get(API_URL)
            const todos = response.data
            const titles = todos.map(todo => todo.title)
            // console.log(titles);
            dispatch(getTodosSuccess(titles))

            // const data = response.data
            // dispatch(getTodosSuccess(data))
        } catch (error) {
            dispatch(getTodosFailure(error.message))
        }
    }
}

// store
const store = createStore(todoReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState());
})
// store.dispatch(getTodos())
store.dispatch(fetchTodos())