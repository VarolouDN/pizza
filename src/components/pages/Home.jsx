import React from 'react'
import CategoriesWithHooks from '../categories/CategoriesWithHooks'
import PizzaBlock from '../PizzaBlock'
import SortPopupWithHooks from '../sortPopup/SortPopupWithHooks'
import {useSelector,useDispatch} from "react-redux"
import { setCategoryActionCreator } from '../../redux/actions/filtersActionCreators'
import Preloader from '../Preloader/Preloader'
import { addPizzaActionCreator, setCartPizzasActionCreator } from '../../redux/actions/cartActionCreators'
import { setPizzasInfoActionCreator } from '../../redux/actions/pizzaActionCreators'


function Home() {

  const dispatch = useDispatch()

const varies=[{idItem:0,name:"популярности",type:"rating",order:"desc"},
{idItem:1,name:"цене",type:"price",order:"asc"},{idItem:2,name:"алфавиту",type:"name",order:"desc"}]





  const state =useSelector(({pizzas,filters,cart})=>{

    return{
    pizzas:pizzas.pizzas,
    sortBy:filters.sortBy,
    category:filters.category,
    isLoaded:pizzas.isLoaded,
    totalCount:cart.totalCount,
    totalPrice:cart.totalPrice,
    pizzasInfo:pizzas.pizzasInfo,
    pizzasCount:pizzas.pizzasInfo,
    fullPizzas:pizzas.fullPizzas

    }
    
    }
    
    )
const onClickItem=(index)=>{

  dispatch(setCategoryActionCreator(index))

}


/*const addPizzasInfo=(elem)=>{
  let obj={
  id:elem.id
  

  }
  dispatch(setCartPizzasActionCreator(elem))



dispatch(setPizzasInfoActionCreator(obj))

}*/

/*
const addPizza=(elem)=>{

  dispatch(setCartPizzasActionCreator(elem))
  
  
  }
  
*/






    return (
        <div>
                  <div className="container">
          <div className="content__top">


          <CategoriesWithHooks onClickItem={(index)=>onClickItem(index)} category={state.category} 
           items={["Мясные","Вегетарианская","Гриль","Острые","Закрытые"]} />

       
          

           <SortPopupWithHooks sortBy={state.sortBy} varies={varies}/>

          </div>

          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">



{state.isLoaded?state.pizzas.map((elem,index)=>{



  return   <PizzaBlock elem={elem} rating={elem.rating} price={elem.price} sizes={elem.sizes} category={elem.category} key ={index} name={elem.name} 
  imageUrl={elem.imageUrl} id={elem.id}  types={elem.types} isLoaded={state.isLoaded} /*addPizza={()=>addPizza(elem) }*/
   totalCount={state.totalCount} pizzasCount={elem.pizzasCount} fullPizzas={state.fullPizzas}
    pizzasInfo={state.pizzasInfo} /*addPizzasInfo={()=>addPizzasInfo(elem)} */index={index}
     pizzaSize={elem.pizzaSize} pizzaType={elem.pizzaType}/>

}):Array(20).fill(0).map((_,index)=>{

  return <Preloader key={index} />
})
}

    
        
          </div>
        </div>




        </div>
    )
}

export default Home

