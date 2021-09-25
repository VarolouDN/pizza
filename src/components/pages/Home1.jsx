import React from 'react'
import CategoriesWithHooks from '../categories/CategoriesWithHooks'
import PizzaBlock from '../PizzaBlock'
import SortPopupWithHooks from '../sortPopup/SortPopupWithHooks'

function Home(props) {
  
    return (
        <div>
                  <div className="container">
          <div className="content__top">


          <CategoriesWithHooks onClickItem={(elem)=>console.log(elem)}  items={["Мясные","Вегетарианская","Гриль","Острые","Закрытые"]}/>

       
            

           <SortPopupWithHooks varies={[{name:"популярности",type:"popular"},
           {name:"цене",type:"price"},{name:"алфавиту",type:"alphabet"}]}/>

          </div>

          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">



{props.pizzas.map((elem,index)=>{
  return  <PizzaBlock rating={elem.rating} price={elem.price} sizes={elem.sizes} category={elem.category} key ={index} name={elem.name} 
  imageUrl={elem.imageUrl} id={elem.id}  types={elem.types}/>
})

}


        
          </div>
        </div>




        </div>
    )
}

export default Home
