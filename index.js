
const { createStore } = require("redux")

// defining constants (if you need) | using constant variable for avoiding character mistake
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"


// 1. state
// 2. dispatch action
// 3. reducer
// 4. store


// state
const initialCounterState = {
    count: 0,
}

const initialUsersState = {
    users: [{
        name: "ashadul",
        age: 23
    }]
}



// action
// action is object - it must be have {type and payload}
// action have action creator function
const incrementAction = () => {
    return {
        // type: "INCREMENT" 
        type: INCREMENT,
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "Topu", age: 34 }
    }
}


// create reducer for counter
// reducer is a pure function
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        // break;

        case DECREMENT:
            return {
                count: state.count - 1
            }
        // break;

        default:
            state;
            break;
    }
}

// store =getState(), dispatch(), subscribe()
// create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(decrementAction())
