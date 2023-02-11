import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo' ;
function App() {
  // const name = 'Hau' ;
  // const age = 18 ; 
  // const isMale = true ; 
  // const student = {
  //   name : 'Ninh Ba Ky' ,
  // };
  // const colorList = ['red' , 'green' , 'blue'] ;

  return (
    <div className="App">
        <TodoFeature />
        {/* <SongFeature /> */}
        {/* <ColorBox /> */}
    </div>
  );
}

export default App;
