
const { createStore } = require("redux")

// what I need for counter app
// state - count:0
// action - increment, decrement, reset
// reducer
// store


// constant variable

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
// state
const initialState = {
    count: 0,
}
// action
const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value // payload
    }
}
// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            break;
    }
}
// store
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementByValue(5))


// add user 
const ADD_USER = 'ADD_USER'
// state 
const initialUser = {
    users: ["Ashadul"],
    count: 1,
}
// action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// reducer 
const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            break;
    }

}

// store
const userStore = createStore(userReducer)
userStore.subscribe(() => {
    console.log(userStore.getState());
})
userStore.dispatch(addUser("Topu"))