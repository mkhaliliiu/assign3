import React from 'react';
import './App.css';
import Dinner from './dinner.js'
function App() {
  return (
    
    <div className="App">
    <h1>Hello Its Khalil Ahmad and its my Favourite Countries and Cities List</h1>
    <hr/>
    <hr/>
      
      {/*<Dinner />*/}
    <Dinner stateName="Pakistan" cityName = "Lahore"/>
    <hr/>
    <Dinner stateName="Turkey" cityName = "Istanbul"/>
    <hr/>
    <Dinner stateName="Spain" cityName = "Barcelona"/>
    </div>
  );
}

export default App;
