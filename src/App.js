import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductFeature from 'features/Product';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import CounterFeature from './features/Counter';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo';

// styled component CSS IN JS
const Title = styled.h1`
    text-align : center ; 
    font-weight : bold ;
    color : ${(props) => props.color || 'green'} ;
`;
//Material styles
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

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
        // console.log(productList) ;
    }
    fetchProducts() ;
  },[]);
  const classes = useStyles() ;

  // const {enqueueSnackbar} = useSnackbar() ;
  // const showNoti = ()=>{
  //     enqueueSnackbar('Register succesfully' , {variant:'success'});
  // }
  return (
    <div className="app">
      <Header  />
        {/* <Title color='blue'>Heading</Title> */}
        {/* <Button className={classes.root}>Submit</Button> */}
        {/* <TodoFeature /> */}
        {/* <SongFeature /> */}
        {/* <ColorBox /> */}
        {/* <Link to='todos'>Todo</Link>
        <p><Link to='songs'>Song</Link></p> */}
        {/* <Button onClick={showNoti}>Show noti</Button> */}

      <Switch>
        <Redirect from='/home' to='/' exact />
        <Route path='/' component={CounterFeature} exact/>
        <Route path='/todos' component={TodoFeature} exact/>
        <Route path='/songs' component={SongFeature} />
        <Route path='/products' component={ProductFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
