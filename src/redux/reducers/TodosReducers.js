import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/TodosConstants"

const initialTodos = {
    isLoading: false,
    isError: false,
    todos: [],
}

const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                // ...state,
                isLoading: false,
                todos: action.payload,
                isError: false

            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return state
    }
}

export default todosReducer