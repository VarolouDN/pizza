import { combineReducers, createStore } from "redux";
import filters_Reducer from "./reducers/filters_Reducer.js"
import pizzas_Reducer from "./reducers/pizzas_Reducer.js"
let reducers=combineReducers({
    
    
filters_Reducer,
pizzas_Reducer

})


 let store=createStore(reducers,
    
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


 window.store=store


 
 export default store