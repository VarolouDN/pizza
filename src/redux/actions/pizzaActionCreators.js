import axios from "axios"


export  const setPizzasActionCreator=(pizzas)=>({

type:"SET_PIZZAS",payload:pizzas

})
export  const setLoadedPizzasActionCreator=(payload)=>({

type:"SET_LOADED",payload:payload

})

export const fetchPizzas=(category,sortBy)=>(dispatch)=>{
dispatch(setLoadedPizzasActionCreator(false))
    axios.get/*fetch*/(`http://localhost:3001/pizzas?category=${category}&sortBy=${sortBy}`)
    /*.then((response)=>response.json())*/.then(response=>{
      dispatch(setPizzasActionCreator(response.data));
 console.log(response.data)
    })

}