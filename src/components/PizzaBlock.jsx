import React,{useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types';
import Preloader from "./Preloader/Preloader"
import { setCartPizzasActionCreator, setPizzaCountActionCreator, setTotalCountActionCreator, setTotalCountPlusActionCreator, setTotalPriceActionCreator } from '../redux/actions/cartActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzasInfoActionCreator } from '../redux/actions/pizzaActionCreators';

function PizzaBlock(props) {


  
const[activePizzaSize,setActivePizzaSize]=useState(0)
const[activePizzaType,setActivePizzaType]=useState(0)
/*
const state=useSelector(({pizzas})=>{

return {

pizzasInfo:pizzas.pizzasInfo

}


}
)
*/
let [inCount,setInCount]=useState(0)
const dispatch=useDispatch()

const pizzaRef=useRef()
/*console.log(pizzaRef)*/












function letCount(){

setInCount(++inCount)

dispatch(setTotalCountPlusActionCreator(inCount))
dispatch(setTotalPriceActionCreator(props.price))
/*dispatch(setPizzaCountActionCreator(props.id))*/
}
 

const addPizzasInfo=()=>{
  let obj={
  id:props.id,
  count:inCount,
  index:props.index,
   item:props.elem
  }
  dispatch(setCartPizzasActionCreator(props.elem))



dispatch(setPizzasInfoActionCreator(obj))



}



useEffect(()=>{
pizzaRef.current.addEventListener("click",letCount)

},

 []
)

const chooseSize=(index)=>{
setActivePizzaSize(index)
  
}
const chooseType=(index)=>{
setActivePizzaType(index)
  
}

const realCount=()=>{

props.cartIsLoaded===true?props.pizzasInfo.filter((elem,_,arr)=>elem.id===props.id && setInCount(arr[0]) ):setInCount(0)


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


    <div className="button button--outline button--add" ref={pizzaRef} /*onClick={props.addPizza}*/onClick={addPizzasInfo} >
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
      <i>{/*pizzaRating*/}{/*{props.pizzasInfo===[]?count:props.pizzasInfo.filter(elem =>
        
      elem.id===props.id && elem.count)}*/}{realCount}
      </i>
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
sizes:PropTypes.arrayOf(PropTypes.number).isRequired,
isLoaded:PropTypes.bool


}

PizzaBlock.defaultProps={
price:0,
types:[],
sizes:[]

}

export default PizzaBlock
