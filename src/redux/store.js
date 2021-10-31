import {combineReducers, applyMiddleware} from 'redux'
import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getProdcutsReducer, getProductDetailsReducer } from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'


const reducer = combineReducers({

    getProducts : getProdcutsReducer,
    getProductDetails : getProductDetailsReducer,
    cart : cartReducer,
})

const middleware = [thunk];

const store = createStore (

    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;