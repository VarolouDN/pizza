

const initialState={

sortBy:"popular",
category:0



}


const filters_Reducer=(state=initialState,action)=>{

  if(action.type==="SET_SORT_BY"){

return {
...state,sortBy:action.payload

}


  }


    return state

}




export default filters_Reducer