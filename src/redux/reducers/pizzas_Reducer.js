const initialState={
    pizzas:[],
    isLoaded:false

    }
    
    
    const pizzas_Reducer=(state=initialState,action)=>{
    
      if(action.type==="SET_PIZZAS"){
    
    return {
    ...state,pizzas:action.payload
    
    }
    
    
      }
    
    
        return state
    
    }
    
    
    
    
    export default pizzas_Reducer