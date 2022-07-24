import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  const [listItems, setListItems] = useState([]);
  

  // пиво
  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=2`)
    .then((res) => {
      setListItems([...listItems, ...res.data]);
      console.log(res.data);
    })
  }, []);

  // https://api.punkapi.com/v2/beers/random

   
  return (
    <>
      <Header />      
      
      <Routes>
        <Route path='/' element={<Home listItems={listItems}/>}>
        </Route>
        <Route path='/signin' element={<SignIn />}>
        </Route>
        <Route path='/signup' element={<SignUp />}>
        </Route>
      </Routes>     

    </>
  );
}

export default App;
