import React from "react";
import classNames from "classnames";


function Button(props,b,c){
    
return <div><button className={classNames("button",{"button--cart":props.outline})}>
{props.children}</button>
{console.log(props,b,c)}
</div>

}
export default Button