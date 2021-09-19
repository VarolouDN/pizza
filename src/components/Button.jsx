import React from "react";
import classNames from "classnames";


function Button({className,children,...props}){
   




return <div><button onClick={function(){alert("Hello!")}}className={classNames("button",className,{"button--cart":props.outline})}>
{children}</button>

</div>

}
export default Button