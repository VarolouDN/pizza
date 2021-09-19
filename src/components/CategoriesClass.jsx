import React from "react";





class CategoriesClass extends React.Component{

    state={

activeItem:null,

    }

    onSelectItem(index){

        this.setState({activeItem:index})

    }


render(){

return  <div className="categories">

<ul>  
<li className={this.state.activeItem===null?"active":""} 
onClick ={()=>this.onSelectItem(null)} > Все</li>
{this.props.items.map((elem,index)=>{
    
return <li className={this.state.activeItem===index?"active":""} 
onClick ={()=>this.onSelectItem(index)} key={`${elem}_${index}`} > {elem}</li>

})}

</ul>
</div>

}
}
export default CategoriesClass