import React from "react";
import { useState } from "react";


const CategoriesWithHooks=(props)=>{




const[activeItem,setActiveItem]=useState(null)

function onSelectItem(index){

  setActiveItem(index) 
  props.onClickItem(index)
}




return  <div className="categories">

<ul>  
<li  className={activeItem===null?"active":""}
 onClick ={()=>onSelectItem(null)}>Все</li>


{props.items && props.items.map((elem,index)=>{
    
return <li  className={activeItem===index?"active":""}
 onClick ={()=>onSelectItem(index)} key={`${elem}_${index}`} > {elem}</li>

})}

</ul>
</div>

}

export default CategoriesWithHooks