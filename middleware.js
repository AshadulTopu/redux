const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")
// product reducer
// product constants
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

// product initial state
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}

// product action
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProduct = (value) => {
    return {
        type: ADD_PRODUCT,
        payload: value
    }
}

// product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}

// store
const productStore = createStore(productReducer, applyMiddleware(logger))
productStore.subscribe(() => (
    console.log(productStore.getState())
))

productStore.dispatch(getProducts())
productStore.dispatch(addProduct("Potato"))

