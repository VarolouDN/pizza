import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const CategoriesWithHooks=(props)=>{




/*const[activeItem,setActiveItem]=useState(null)*/

function onSelectItem(index){

  /*setActiveItem(index) */
  props.onClickItem(index)
}




return  <div className="categories">

<ul>  
<li  className={/*activeItem*/props.category===null?"active":""}
 onClick ={()=>onSelectItem(null)}>Все</li>


{props.items && props.items.map((elem,index)=>{
    
return <li  className={/*activeItem*/props.category===index?"active":""}
 onClick ={()=>onSelectItem(index)} key={`${elem}_${index}`} > {elem}</li>

})}

</ul>
</div>

}

CategoriesWithHooks.propTypes={
items:PropTypes.arrayOf(PropTypes.string).isRequired,
onClickItem:PropTypes.func


}

CategoriesWithHooks.defaultProps={items:[]}

export default CategoriesWithHooks