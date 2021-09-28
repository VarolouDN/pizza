import React,{useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types';
import Preloader from "./Preloader/Preloader"

function PizzaBlock(props) {

  
const[activePizzaSize,setActivePizzaSize]=useState(0)
const[activePizzaType,setActivePizzaType]=useState(0)
let[count,setCount]=useState(props.rating)


const pizzaRef=useRef()
/*console.log(pizzaRef)*/


function letCount(){

setCount(count++)

}
 

useEffect(()=>
pizzaRef.current.addEventListener("click",letCount),

 []
)

const chooseSize=(index)=>{
setActivePizzaSize(index)
  
}
const chooseType=(index)=>{
setActivePizzaType(index)
  
}




    return (
        <div>




    <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={props.imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{props.name}</h4>
  <div className="pizza-block__selector">
    <ul>
      {props.types.map((elem,index)=>{
       
        return <li key={index} onClick={()=>chooseType(index)} className={activePizzaType===index?"active":""}>
          {elem===0?"тонкое":"традиционное"}</li>
         
          
})
     }
    </ul>
    <ul>
      {props.sizes.map((elem,index)=>{
      return <li key={index} onClick={()=>chooseSize(index)} 
      className={activePizzaSize===index?"active":""}>{elem} см.</li>})
      }
    
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">{`от ${props.price} ₽`}</div>


    <div className="button button--outline button--add" ref={pizzaRef} /*onClick={letCount}*/ >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span >Добавить</span>
      <i>{/*pizzaRating*/}{count}</i>
    </div>
  </div>
</div>

        </div>





    )
}





PizzaBlock.propTypes={
name:PropTypes.string.isRequired,
rating:PropTypes.number.isRequired,
price:PropTypes.number.isRequired,
types:PropTypes.arrayOf(PropTypes.number).isRequired,
sizes:PropTypes.arrayOf(PropTypes.number).isRequired


}

PizzaBlock.defaultProps={
price:0,
types:[],
sizes:[]

}

export default PizzaBlock
