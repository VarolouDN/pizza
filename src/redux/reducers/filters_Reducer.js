import {  } from "react-dom"


const initialState={
  category:null,
sortBy:{id:0,type:"popular",name:"популярности"}




}


const filters_Reducer=(state=initialState,action)=>{

  if(action.type==="SET_SORT_BY"){

return {
...state,sortBy:action.payload

}


  }
  if(action.type==="SET_CATEGORY"){

return {
...state,category:action.payload

}


  }


    return state

}




export default filters_Reducer