const { createStore, combineReducers } = require("redux")
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
                // products: [...state.products],
                // numberOfProducts: state.numberOfProducts
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

// // store
// const productStore = createStore(productReducer)
// productStore.subscribe(() => (
//     console.log(productStore.getState())
// ))

// productStore.dispatch(getProducts())
// productStore.dispatch(addProduct("Potato"))

// ---------------------------------------------------------------------------------------------------------------------------
// cart reducer
// cart constants
const GET_CARTS = "GET_CARTS"
const ADD_CART = "ADD_CART"

// cart initial state
const initialCartState = {
    products: ["milk", "oil"],
    numberOfProducts: 2,
}

// cart action
const getCarts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addCart = (value) => {
    return {
        type: ADD_PRODUCT,
        payload: value
    }
}


// cart reducer
const cartReducer = (state = initialCartState, action) => {
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
// const cartStore = createStore(cartReducer)
// cartStore.subscribe(() => (
//     console.log(cartStore.getState())
// ))

// cartStore.dispatch(getCarts())
// cartStore.dispatch(addCart("chocolate"))

// ---------------------------------------------------------------------------------------------------------------------------
// reducer combination
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer)
store.subscribe(() => (
    console.log(store.getState())
))

store.dispatch(getCarts())
store.dispatch(addCart("chocolate"))