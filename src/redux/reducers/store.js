import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools,} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {cartReducer} from "./cartReducer";
import {catalogReducer} from "./catalogReducer";

export const store = createStore(combineReducers({
    cart : cartReducer,
    catalog: catalogReducer,
}),composeWithDevTools(applyMiddleware(thunk)))