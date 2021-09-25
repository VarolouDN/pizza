import React from "react";
import {connect} from "react-redux"
import CategoriesWithHooks from "./CategoriesWithHooks";


class CategoriesClassComponent extends React.Component{

render(){

return <CategoriesWithHooks/>





}


}

const mapStateToProps=(state)=>({

items:state.categories.items


})
let mapDispatchToProps=(dispatch)=>{

 return { onSelectItem:()=>dispatch(onSelectItem(id))

 }
}




export default CategoriesClassComponent= connect(mapStateToProps,mapDispatchToProps)(CategoriesClassComponent)

