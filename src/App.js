
import './App.scss';
import {Header,Cart} from './components';

import {Route} from "react-router-dom";


import Home from './components/pages/Home';


function App() {
  return (
  <div>
    
   <div className="wrapper">

      <Header/>
    
      <div className="content">

        <Route exact path="/" component={Home}/>
        <Route  path="/cart" component={Cart}/>
      
      </div>
    </div> 



    </div>
  );
}

export default App;
