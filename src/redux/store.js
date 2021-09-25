import { combineReducers, createStore } from "redux";
import home_Reducer from "./home_Reducer.js"
let reducers=combineReducers({
    
    
home:home_Reducer

})


 let store=createStore(reducers,
    
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


 window.store=store


 
 export default store