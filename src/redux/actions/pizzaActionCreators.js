import axios from "axios"


export  const setPizzasActionCreator=(pizzas)=>({

type:"SET_PIZZAS",payload:pizzas

})

export const fetchPizzas=()=>(dispatch)=>{

    axios.get/*fetch*/("http://localhost:3001/pizzas")
    /*.then((response)=>response.json())*/.then(response=>{
      dispatch(setPizzasActionCreator(response.data));
 console.log(response.data)
    })

}