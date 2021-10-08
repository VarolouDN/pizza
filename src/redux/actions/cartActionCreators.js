 export const setCartPizzasActionCreator=(id)=>{

return {

type:"SET_CART_PIZZAS",
payload:id

}

 }
 


 export const setTotalCountActionCreator=(payload)=>{

return {

type:"SET_TOTAL_COUNT",
payload

}

 }
 
 export const setTotalPriceActionCreator=(payload)=>{

return {

type:"SET_TOTAL_PRICE",
payload

}

 }
 export const setPizzaCountActionCreator=(payload)=>{

return {

type:"SET_PIZZA_COUNT",
payload:payload

}

 }
 