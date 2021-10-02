
const initialState={
    items:[],
    totalPrice:0,
    totalCount:0
  
  
  
  
  
  }
  
  
 
  const cart_Reducer=(state=initialState,action)=>{
  
    if(action.type==="SET_CART_PIZZAS"){
  
  return {
  ...state,items:[...state.items,action.payload]
  
  }
}

    if(action.type==="SET_TOTAL_PRICE"){
  
  return {
  ...state,totalPrice:state.totalPrice+action.payload
  
  }
  
  
    }
    if(action.type==="SET_TOTAL_COUNT"){
  
  return {
  ...state,totalCount:action.payload++
  
  }
    }
    if(action.type==="SET_PIZZA_COUNT"){
  
  return {
  ...state,pizzaCount:state.items.pizzaCount +action.payload
  
  }
  
  
    }
  
  
      return state
  
  }
  
  
  
  
  export default cart_Reducer

