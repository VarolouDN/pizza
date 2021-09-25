
import './App.scss';
import {Header,Cart} from './components';
import React,{useEffect,useState} from 'react'
import {Route} from "react-router-dom";


import Home from './components/pages/Home';
import { setPizzasActionCreator } from './redux/actions/pizzaActionCreators';
import { connect } from 'react-redux';


/*
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
  )
}
*/



class App extends React.Component{

componentDidMount(){

  fetch("http://localhost:3000/db.json")
  .then((response)=>response.json()).then(json=>{
    this.props.setPizza(json.pizzas)
  console.log(json.pizzas)
  })



}

render(){
  
return  (
  <div>
    
   <div className="wrapper">

      <Header/>
    
      <div className="content">

        <Route exact path="/" render={()=><Home pizzas= {this.props.pizzas}/>}/>
        <Route  path="/cart" component={Cart}/>
      
      </div>
    </div> 



    </div>
  )



}

}

const mapStateToProps=(state)=>{
return {

pizzas:state.pizzas.pizzas

}

};

const mapDispatchToProps=(dispatch)=>{

return {

setPizza:(pizzas)=>dispatch(setPizzasActionCreator(pizzas))


}
}





export default connect (mapStateToProps,mapDispatchToProps) (App);
