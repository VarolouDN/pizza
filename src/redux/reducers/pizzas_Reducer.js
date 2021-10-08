

const initialState={
    pizzas:[],
    isLoaded:false,
    pizzasCount:0,
    pizzasInfo:[
     
    ]

    }
    
    
    const pizzas_Reducer=(state=initialState,action)=>{
    
      if(action.type==="SET_PIZZAS"){
    
    return {
    ...state,pizzas:action.payload,
       isLoaded:true
    }
  }
    


      if(action.type==="SET_PIZZAS_INFO"){
  
if(state===initialState || !state.pizzasInfo.some(elem=>elem.id===action.payload.id)){

return {
    ...state,pizzasInfo:[...state.pizzasInfo,action.payload]
    }
    
    
      }

      if(state.pizzasInfo.some(elem=>elem.id===action.payload.id)){

return {
  ...state,pizzasInfo:[...state.pizzasInfo.map(elem=>elem.id===action.payload.id?
    {id:action.payload.id,count:action.payload.count}:elem)]
  }

      }

    }  
    
        return state
    
    }
    
    
    
    
    export default pizzas_Reducer