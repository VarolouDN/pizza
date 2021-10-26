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
 