import React,{useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types';
import Preloader from "./Preloader/Preloader"
import { setCartPizzasActionCreator, setPizzaCountActionCreator, setTotalCountActionCreator, setTotalCountPlusActionCreator, setTotalPriceActionCreator } from '../redux/actions/cartActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { setFullPizzasCountActionCreator, setFullPizzasGlobalCountActionCreator, setFullPizzasSizeActionCreator, setFullPizzasTypeActionCreator, setPizzasCount, setPizzasCountActionCreator, setPizzasInfoActionCreator, setPizzasSizeActionCreator, setPizzasTypeActionCreator } from '../redux/actions/pizzaActionCreators';

function PizzaBlock(props) {

/*const[activePizzaSize,setActivePizzaSize]=useState(0)
const[activePizzaType,setActivePizzaType]=useState(0)*/
 

let result=props.fullPizzas.some(e=>e.id===props.id /*&& e.category===props.category*/ )?props.fullPizzas.filter(e=>e.id===props.id)[0]:props

console.log(result.pizzasCount)




let inCount=result.pizzasCount
/*условие обнуляющее useState*/
/*let [inCount,setInCount]=useState(result.pizzasCount)
console.log(inCount)
/*if(props.pizzasCount>0){
  setInCount(result.pizzasCount)
}
*/

const dispatch=useDispatch()

const pizzaRef=useRef()







function letCount(){

/*setInCount(++inCount)*/
/*dispatch(setTotalCountPlusActionCreator(inCount))*/













/*dispatch(setTotalCountPlusActionCreator(result.pizzasCount))

dispatch(setTotalPriceActionCreator(props.price))*/









/*dispatch(setPizzaCountActionCreator(props.id))*/
}


const addPizzasInfo=(index,ind)=>{
  /*или здесь условие*/

  dispatch(setTotalCountPlusActionCreator(result.pizzasCount))

  dispatch(setTotalPriceActionCreator(props.price))



  dispatch(setFullPizzasGlobalCountActionCreator(props.id))
 
 /*setInCount(++inCount)*/

 console.log(result.pizzasCount)
 let obj={
  id:props.id,
  count:result.pizzasCount,
   url:props.imageUrl,
   name:props.name,
   sizes:props.sizes,
   types:props.types,
   item:props.elem,
   price:props.price,
   index:props.index,
   pizzaSize:props.pizzaSize,
   pizzaType:props.pizzaType
  }



 
  dispatch(setCartPizzasActionCreator(props.elem))

dispatch(setPizzasInfoActionCreator(obj))

dispatch(setPizzasCountActionCreator(obj))
dispatch(setFullPizzasCountActionCreator(obj))

}



useEffect(()=>{
pizzaRef.current.addEventListener("click",letCount)




},
 []
)

const chooseSize=(index)=>{
  let obj={
    id:props.id,
    pizzaSize:index
  }
dispatch(setFullPizzasSizeActionCreator(obj))
dispatch(setPizzasSizeActionCreator(obj))
  
}
const chooseType=(ind)=>{
  let obj={
  id:props.id,
  pizzaType:ind
  }
  dispatch(setFullPizzasTypeActionCreator(obj))
  dispatch(setPizzasTypeActionCreator(obj))
  
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
      {props.types.map((elem,ind)=>{
       
        return <li key={ind} onClick={()=>chooseType(ind)} className={result.pizzaType===ind?"active":""}>
          {elem===0?"тонкое":"традиционное"}</li>
         
          
})
     }
    </ul>
    <ul>
      {props.sizes.map((elem,index)=>{
      return <li key={index} onClick={()=>chooseSize(index)} 
      className={result.pizzaSize===index?"active":""}>{props.sizes===0?props.sizes[0]:props.sizes[index]} см.</li>})
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
      <i>{result.pizzasCount}
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
