import React from "react";


const Categories=(props)=>{




return  <div className="categories">

<ul>  
<li className="active">Все</li>
{props.items.map((elem,index)=>{
    
return <li  onClick ={()=>props.onClickItem(elem)} key={`${elem}_${index}`} > {elem}</li>

})}

</ul>
</div>

}

export default Categories