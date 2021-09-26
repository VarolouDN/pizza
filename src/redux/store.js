import { combineReducers, createStore,compose,applyMiddleware } from "redux";
import filters_Reducer from "./reducers/filters_Reducer.js"
import pizzas_Reducer from "./reducers/pizzas_Reducer.js"
import thunk from "redux-thunk"

let reducers=combineReducers({
    
    
filters:filters_Reducer,
pizzas:pizzas_Reducer

})
const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 let store=createStore(reducers,
    composeEnchancers(applyMiddleware(thunk))
 )


 window.store=store


 
 export default store