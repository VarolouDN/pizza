import axios from "axios"


export  const setPizzasActionCreator=(pizzas)=>({

type:"SET_PIZZAS",payload:pizzas

})
export  const setLoadedPizzasActionCreator=(payload)=>({

type:"SET_LOADED",payload:payload

})

export const fetchPizzas=(category,sortBy)=>(dispatch)=>{
  
dispatch(setLoadedPizzasActionCreator(false))
    axios.get/*fetch*/(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy.type}&_={desc}`)
    /*.then((response)=>response.json())*/.then(response=>{
      dispatch(setPizzasActionCreator(response.data.map(elem=>elem?{...elem,pizzasCount:0}:elem)));
 console.log(response.data)

    })
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