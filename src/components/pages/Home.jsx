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
    pizzasCount:pizzas.pizzasInfo
    

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
   totalCount={state.totalCount} pizzaCount={state.pizzaCount} pizzaInfo={ state.pizzasInfo}/* addPizzasInfo={()=>addPizzasInfo(elem)}*//>

}):Array(20).fill(0).map((_,index)=>{

  return <Preloader key={index} />
})
}

{/*
      {props.pizzas.map((elem,index)=>{
        
    return    <div key={elem.id}className="pizza-block">
  <img
    className="pizza-block__image"
    src={elem.imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{elem.name}</h4>
  <div className="pizza-block__selector">
    <ul>
     {elem.types.map((item,index)=> {
     
     return <li key={index}className="active">{item}</li>}
     
     )}
     
    </ul>
    <ul>
      {elem.sizes.map((item,index)=>{
      
      return <li key={index} className="active">{item}</li>}
      
      
      
      )}
    
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">{"от "+elem.price+" ₽*"}</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>{elem.rating}</i>
    </div>
  </div>
</div>
      })

}
 
*/}













































         {/*   <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>

            <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>



            <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> 



             <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>


              <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> 



               <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>



                <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> 



                <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Чизбургер-пицца</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
    <div className="button button--outline button--add">
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>
        
        
              */}
        
          </div>
        </div>




        </div>
    )
}

export default Home

