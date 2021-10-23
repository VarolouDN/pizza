

const initialState={
    pizzas:[],
    isLoaded:false,
    
  
    
    
    pizzasInfo:[]
    }
    
    
    const pizzas_Reducer=(state=initialState,action)=>{
    
      if(action.type==="SET_PIZZAS"){
    
    return {
    ...state,pizzas:action.payload,
       isLoaded:true
    }
  }



  
   
     if(action.type==="SET_PIZZAS_COUNT"){
    

    
      if(state.pizzas.length===0){

    state.pizzas.pizzas.map(elem=>elem?{...elem,pizzasCount:0}:elem)
      }




      if(state.pizzas.length>=0){
    return {
      
   ...state,pizzas:[...state.pizzas.map(elem=>elem.id===action.payload.id?{...elem,pizzasCount:action.payload.count}:elem)]
    
}
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
    {id:action.payload.id,count:action.payload.count,/*item:action.payload.item*/
      url:action.payload.url,name:action.payload.name,size:action.payload.size,
      type:action.payload.type,item:action.payload.item,index:action.payload.index}:elem)]
  }

      }

    }  
    
        return state
    
    }
    
    
    
    
    export default pizzas_Reducer