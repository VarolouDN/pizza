 export const setCartPizzasActionCreator=(id)=>{

return {

type:"SET_CART_PIZZAS",
payload:id

}

 }
 
 export const setCartLoaderActionCreator=(payload)=>{

return {

type:"SET_CART_LOADER",
payload

}

 }
 


 export const setTotalCountPlusActionCreator=()=>{

return {

type:"SET_TOTAL_COUNT_PLUS",


}

 }
 export const setTotalCountMinusActionCreator=()=>{

return {

type:"SET_TOTAL_COUNT_MINUS",


}

 }
 


 export const setTotalPriceActionCreator=(payload)=>{

return {

type:"SET_TOTAL_PRICE",
payload

}
 }

 export const setTotalPriceMinusActionCreator=(payload)=>{

return {

type:"SET_TOTAL_PRICE_MINUS",
payload

}

 }





 export const setPizzaCountActionCreator=(payload)=>{

return {

type:"SET_PIZZA_COUNT",
payload:payload

}

 }

 export const deleteTotalPriceTotalCountActionCreator=()=>{

return {

type:"DELETE_TOTAL_PRICE_TOTAL_COUNT",


}

 }


 
/*Изменение цены и количества при удалении элемента          */

export const changeTotalPriceTotalCountActionCreator=(payload)=>{

    return {
    
    type:"CHANGE_TOTAL_PRICE_TOTAL_COUNT",
    payload
    
    
    }
    
     }






/*Изменение цены и количества при удалении элемента          */


 