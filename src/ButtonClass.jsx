import React from "react";
import classNames from "classnames";

class ButtonClass extends React.Component{

componentDidMount(){
console.log("Компонент вмонтирован")

}


render(){
   
return <button className={classNames("button",{"button--cart":this.props.outline})}>
    {this.props.children}</button>


}

}
export default ButtonClass