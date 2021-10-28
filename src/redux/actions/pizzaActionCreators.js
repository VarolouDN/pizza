import axios from "axios"
import store from "../store"




export  const setPizzasActionCreator=(pizzas)=>({

type:"SET_PIZZAS",payload:pizzas

})



export  const setFullPizzasActionCreator=(payload)=>({

type:"SET_FULL_PIZZAS",payload:payload

})
export  const setLoadedPizzasActionCreator=(payload)=>({

type:"SET_LOADED",payload:payload

})





export const setFullPizzasActionCreatorThunk=(dispatch)=>{
  


  /*dispatch(setLoadedPizzasActionCreator(false))*/
      axios.get/*fetch*/(`http://localhost:3001/pizzas`)
      /*.then((response)=>response.json())*/.then(response=>{
        
         
        dispatch(setFullPizzasActionCreator(response.data.map(elem=>
          
         
          
  
  
          elem?{...elem,pizzasCount:0}:elem)))
   console.log(response.data)
  
      })
  
  /*store.pizzas.pizzasInfo.map(e=>e.id===elem.id && elem.pizzasCount=e.count)*/
  
  }


  export const setFullPizzasGlobalCountActionCreator=(payload)=>{

    return {
       type:"SET_FULL_PIZZAS_GLOBAL_COUNT",
       payload
  
  
    }
  }






export const fetchPizzas=(category,sortBy)=>(dispatch)=>{
  


dispatch(setLoadedPizzasActionCreator(false))

 if(category===null){
  axios.get(`http://localhost:3001/pizzas`)
  .then(response=>{
    
     
    dispatch(setPizzasActionCreator(response.data.map(elem=>
      
      elem?{...elem,pizzasCount:0}:elem)))


  })


 }
 else{
    axios.get/*fetch*/(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy.type}&_={desc}`)
    /*.then((response)=>response.json())*/.then(response=>{
      
       
      dispatch(setPizzasActionCreator(response.data.map(elem=>
        
        elem?{...elem,pizzasCount:0}:elem)))
 

    })
  }
/*store.pizzas.pizzasInfo.map(e=>e.id===elem.id && elem.pizzasCount=e.count)*/

}


export const setPizzasInfoActionCreator=(payload)=>{

  return {
     type:"SET_PIZZAS_INFO",
     payload


  }
}


export const setPizzasCountActionCreator=(payload)=>{

  return {
     type:"SET_PIZZAS_COUNT",
     payload


  }
}
export const setFullPizzasCountActionCreator=(payload)=>{

  return {
     type:"SET_FULL_PIZZAS_COUNT",
     payload


  }
}
/*Удаление пицц из корзины                     */
export const setDeletePizzasInfoCartActionCreator=()=>{

  return {
  
  type:"SET_DELETE_PIZZAS_INFO_CART",
  
  }
  
   }






export const deletePizzasCartActionCreator=()=>{

  return {
  
  type:"DELETE_PIZZAS_CART",
  
  }
  
   }
  
  
  
   
   export const deleteFullPizzasCartActionCreator=()=>{
  
  return {
  
  type:"DELETE_FULL_PIZZAS_CART",
  
  }
  
   }

   /*========================Удаление пицц из корзины=======================================*/







   /*Удаление конкретных пицц из корзины                            */


   export const deletePizzasInfoPizzaCartActionCreator=(payload)=>{
  
    return {
    
    type:"DELETE_PIZZAS_INFO_PIZZA_CART",
    payload
    
    }
    
     }


   export const deletePizzasPizzaCartActionCreator=(payload)=>{
  
    return {
    
    type:"DELETE_PIZZAS_PIZZA_CART",
    payload
    
    }
    
     }

   export const deleteFullPizzasPizzaCartActionCreator=(payload)=>{
  
    return {
    
    type:"DELETE_FULL_PIZZAS_PIZZA_CART",
    payload
    
    }
    
     }

     /*удаление пицц и изменение их цены и количества                 */