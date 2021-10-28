
const initialState={
    items:[],
    totalPrice:0,
    totalCount:0,
   cartIsLoaded:false
  
  
  
  
  }
  
  
 
  const cart_Reducer=(state=initialState,action)=>{
  
    if(action.type==="SET_CART_PIZZAS"){
   
  return {
  ...state,items:[...state.items,action.payload]
  
  }
}


    if(action.type==="SET_CART_LOADER"){
   
  return {
  ...state,cartIsLoaded:action.payload
  
  }
}












    if(action.type==="SET_TOTAL_PRICE"){
  
  return {
  ...state,totalPrice:state.totalPrice+action.payload
  
  }
  
    }

    if(action.type==="SET_TOTAL_PRICE_MINUS"){
  
  return {
  ...state,totalPrice:state.totalPrice-action.payload
  
  }
  
    }









    if(action.type==="SET_TOTAL_COUNT_PLUS"){
   
  return {
  ...state,totalCount:state.totalCount+1
  
  }
}
    if(action.type==="SET_TOTAL_COUNT_MINUS"){
   
  return {
  ...state,totalCount:state.totalCount-1
  
  }
    }
  


    if(action.type==="DELETE_TOTAL_PRICE_TOTAL_COUNT"){
   
  return {
  ...state,totalCount:0,totalPrice:0
  
  }
    }
  


    if(action.type==="CHANGE_TOTAL_PRICE_TOTAL_COUNT"){
   
  return {
  
  ...state,totalCount:state.totalCount-action.payload.count,totalPrice:state.totalPrice-
  (action.payload.count*action.payload.price)
  
  }
    }
  





   


  






  
      return state
  
  }
  
  
  
  
  export default cart_Reducer

