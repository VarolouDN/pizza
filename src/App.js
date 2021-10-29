
import './App.scss';
import {Header,Cart} from './components';
import React,{useEffect} from 'react'
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux';
import Home from './components/pages/Home';
import { fetchPizzas, setFullPizzasActionCreator, setFullPizzasActionCreatorThunk, setPizzasActionCreator } from './redux/actions/pizzaActionCreators';
import Finish from './components/pages/Finish';
/*import { connect } from 'react-redux';*/



function App() {

/*const[pizzas,setPizzas]=useState([])*/
const dispatch=useDispatch()
const state =useSelector(({pizzas,filters})=>{

return{
pizzas:pizzas.pizzas,
sortBy:filters.sortBy,
category:filters.category,
fullPizzas:pizzas.fullPizzas,
pizzasInfo:pizzas.pizzasInfo

}

}

)



useEffect(() => {
dispatch(fetchPizzas(state.category,state.sortBy))

if(state.fullPizzas.length===0){

dispatch(setFullPizzasActionCreatorThunk)
}

},[state.category,state.sortBy]
)




  return (
  <div>
    
   <div className="wrapper">

        <Header/>
    
      <div className="content">

        {/*<Route exact path="/" render={()=><Home pizzas= {state.pizzas}/>}/>*/}
        <Route exact path="/" component={Home}/>

      
        <Route  path="/cart" component={Cart}/>:


      <Route   path="/finish" component={Finish}/>
      
      </div>
    </div> 



    </div>
  )
}

export default App

/*
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
*/