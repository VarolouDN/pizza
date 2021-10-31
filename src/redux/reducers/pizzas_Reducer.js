

const initialState={
    pizzas:[],
    isLoaded:false,
    fullPizzas:[],
    
    
    
    pizzasInfo:[]
    }
    
    
    const pizzas_Reducer=(state=initialState,action)=>{
    
      if(action.type==="SET_PIZZAS"){
    
    return {
    ...state,pizzas:action.payload,
       isLoaded:true
    }
  }



  

      if(action.type==="SET_FULL_PIZZAS"){
    
    return {
    ...state,fullPizzas:action.payload,
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



     if(action.type==="SET_FULL_PIZZAS_COUNT"){
    

      if(state.fullPizzas.length>=0){
    return {
      
   ...state,fullPizzas:[...state.fullPizzas.map(elem=>elem.id===action.payload.id?{...elem,pizzasCount:action.payload.count}:elem)]
    
}
  }
    
     }
     if(action.type==="SET_FULL_PIZZAS_GLOBAL_COUNT"){
    

      if(state.fullPizzas.length>=0){
    return {
      
   ...state,fullPizzas:[...state.fullPizzas.map(elem=>elem.id===action.payload?{...elem,pizzasCount:elem.pizzasCount++}:elem)]
    
}
  }
    
     }

/*Установка типа и размеров пиццы  ==============          */ 

if(action.type==="SET_FULL_PIZZAS_TYPE"){
    
return{

  ...state,fullPizzas:[...state.fullPizzas.map(elem=>elem.id===action.payload.id?{...elem,pizzaType:action.payload.pizzaType}:elem)]

  
}
}

if(action.type==="SET_FULL_PIZZAS_SIZE"){
    
return{

  ...state,fullPizzas:[...state.fullPizzas.map(elem=>elem.id===action.payload.id?{...elem,pizzaSize:action.payload.pizzaSize}:elem)]

  
}
  

 }
if(action.type==="SET_PIZZAS_TYPE"){
    
return{

  ...state,pizzas:[...state.pizzas.map(elem=>elem.id===action.payload.id?{...elem,pizzaType:action.payload.pizzaType}:elem)]

  
}
}

if(action.type==="SET_PIZZAS_SIZE"){
    
return{

  ...state,pizzas:[...state.pizzas.map(elem=>elem.id===action.payload.id?{...elem,pizzaSize:action.payload.pizzaSize}:elem)]

  
}
  

 }













/*Установка типа и размеров пиццы  ==============          */ 


/*Очистка корзины */

     if(action.type==="SET_DELETE_PIZZAS_INFO_CART"){
   
      return {
      ...state,pizzasInfo:[]
      
      }
        }
    



     if(action.type==="DELETE_PIZZAS_CART"){
   
      return {
      ...state,pizzas:[...state.pizzas.map(elem=>elem.pizzasCount>0?{...elem,pizzasCount:0}:elem)]
      
      }
        }
    
    
    
        if(action.type==="DELETE_FULL_PIZZAS_CART"){
       
      return {
        ...state,fullPizzas:[...state.fullPizzas.map(elem=>elem.pizzasCount>0?{...elem,pizzasCount:0}:elem)]
      
      }
        }





/*==========================Очистка корзины ======================*/



/*Удаление элемента корзины=========================*/


if(action.type==="DELETE_PIZZAS_INFO_PIZZA_CART"){
       
  return {
    ...state,pizzasInfo:[...state.pizzasInfo.filter(elem=>elem.id!==action.payload)]
  
  }
    }


if(action.type==="DELETE_PIZZAS_PIZZA_CART"){
       
  return {
    ...state,pizzas:[...state.pizzas.map(elem=>elem.id===action.payload?
      
     {...elem,pizzasCount:0}:elem
      )]
  
  }
    }


if(action.type==="DELETE_FULL_PIZZAS_PIZZA_CART"){
       
  return {
    ...state,fullPizzas:[...state.fullPizzas.map(elem=>elem.id===action.payload?
      
     {...elem,pizzasCount:0}:elem
      )]
  
  }
    }



/*удаление пицц и изменение их цены и количества                 */







      if(action.type==="SET_PIZZAS_INFO"){
  
if(state===initialState || !state.pizzasInfo.some(elem=>elem.id===action.payload.id )){

return {
    ...state,pizzasInfo:[...state.pizzasInfo,action.payload]
    }
    
    
      }

    

     /* if( state.pizzasInfo.some(elem=>elem.id===action.payload.id && elem.pizzaSize!==action.payload.pizzaSize )){

        return {
            ...state,pizzasInfo:[...state.pizzasInfo,action.payload.]
            }
            
            
              }*/
     if( state.pizzasInfo.some(elem=>elem.id===action.payload.id && elem.pizzaType!==action.payload.pizzaType )){

        return {

        ...state,pizzasInfo:[...state.pizzasInfo,{...action.payload}].map(

          elem=>elem.id===action.payload.id && elem.pizzaType===action.payload.pizzaType?

          
          {...elem,count:action.payload.count-1}:elem)
        

            }
            
          
              }



















      if(state.pizzasInfo.some(elem=>elem.id===action.payload.id /*&& elem.pizzaSize===action.payload.pizzaSize
        
        && elem.pizzaType===action.payload.pizzaType*/)){



return {

  ...state,pizzasInfo:[...state.pizzasInfo.map(elem=>elem.id===action.payload.id ?
    {id:action.payload.id,count:action.payload.count,
      url:action.payload.url,name:action.payload.name,sizes:action.payload.sizes,
      types:action.payload.types,price:action.payload.price,item:action.payload.item,index:action.payload.index
    ,pizzaSize:action.payload.pizzaSize,pizzaType:action.payload.pizzaType
  
  }:elem)]
  }

      }

    }  
    
        return state
    
    }
    
    
    
    
    export default pizzas_Reducer