
import './App.scss';
import {Header,Cart} from './components';
import React,{useEffect,useState} from 'react'
import {Route} from "react-router-dom";


import Home from './components/pages/Home';


function App() {

const[pizzas,setPizzas]=useState([])


useEffect(() => {

  fetch("http://localhost:3000/db.json")
.then((response)=>response.json()).then(json=>{
  setPizzas(json.pizzas)

})

}, []
)

console.log(pizzas)


  return (
  <div>
    
   <div className="wrapper">

      <Header/>
    
      <div className="content">

        <Route exact path="/" render={()=><Home pizzas= {pizzas}/>}/>
        <Route  path="/cart" component={Cart}/>
      
      </div>
    </div> 



    </div>
  );
}

export default App;
