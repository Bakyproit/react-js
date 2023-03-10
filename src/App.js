import React, { useEffect } from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom' ;
import './App.css';
import ColorBox from './components/ColorBox';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo' ;
import NotFound from './components/NotFound' ;
import productApi from './api/productApi' ;
function App() {
  // const name = 'Hau' ;
  // const age = 18 ; 
  // const isMale = true ; 
  // const student = {
  //   name : 'Ninh Ba Ky' ,
  // };
  // const colorList = ['red' , 'green' , 'blue'] ;

  useEffect(() => {
    const fetchProducts = async () =>{
      const params = {
        _limit : 10 ,
      };
        const productList = await productApi.getAll(params) ;
        console.log(productList) ;
    }
    fetchProducts() ;
  },[]);

  return (
    <div className="App">
        {/* <TodoFeature /> */}
        {/* <SongFeature /> */}
        {/* <ColorBox /> */}
        <Link to='todo'>Todo</Link>
        <p><Link to='song'>Song</Link></p>

      <Switch>
        <Redirect from='/home' to='/' exact />

        <Route path='/' component={TodoFeature} exact/>
        <Route path='/todo' component={TodoFeature} exact/>
        <Route path='/song' component={SongFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
