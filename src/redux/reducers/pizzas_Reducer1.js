
const initialState={
    pizzas:[],
    isLoaded:false,
    pizzasCount:0,
    pizzasInfo:[]
    }
    
    const pizzas_Reducer1=(state=initialState,action)=>{


      if(action.type==="SET_PIZZAS_INFO"){



return {

    ...state,pizzasInfo:[
        action.payload.id:{...state.pizzasInfo.action.payload.id:}]


}

}
   












  
       /* if(state===initialState || !state.pizzasInfo.some(elem=>elem.id===action.payload.id)){
        
        return {
            ...state,pizzasInfo:[...state.pizzasInfo,action.payload]
            }
            
            
              }
        
              if(state.pizzasInfo.some(elem=>elem.id===action.payload.id)){
        
        return {
          ...state,pizzasInfo:[...state.pizzasInfo.map(elem=>elem.id===action.payload.id?
            {id:action.payload.id,count:action.payload.count,item:action.payload.item
              url:action.payload.url,name:action.payload.name,size:action.payload.size,
              type:action.payload.type,item:action.payload.item,index:action.payload.index}:elem)]
          }
        
              }
        
            }  */
            
                return state
            
            }

            export default pizzas_Reducer1