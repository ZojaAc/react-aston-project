import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './containers/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Favorites from './components/Favorites';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';


function App() {
  const [listItems, setListItems] = useState([]);  //  список товаров
  const [listFavor, setListFavor] = useState([]);  //  список избранного
  
  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=2`)
    .then((res) => {
      setListItems([...listItems, ...res.data]);
      console.log(res.data);
    })
  }, []);

  const onAddToFavor = (obj) => {
    if(listFavor.find((item) => item.id === obj.id)) {
      setListFavor((prev) => prev.filter(item => item.id !== obj.id));
    } else {
      setListFavor((prev) => [...prev, obj]);
    }
  };

  const isItemAddtoFavor = (id) => {
    return listFavor.some((obj) => obj.id === id);
  };

  return (
    <>
      <Header />      
      
      <Routes>
        <Route path='/' element={<Home 
          listItems={listItems} onAddToFavor={onAddToFavor} isItemAddtoFavor={isItemAddtoFavor} />}>
        </Route>
        <Route path='/signin' element={<SignIn />}>
        </Route>
        <Route path='/signup' element={<SignUp />}>
        </Route>

        {/* временно */}
        <Route path='/register' element={<RegisterPage />}>
        </Route>
        <Route path='/login' element={<LoginPage />}>
        </Route>

        {/* временно */}
        <Route path='/favorites' element={<Favorites listFavor={listFavor} />}>
        </Route>
        
      </Routes>     

    </>
  );
}

export default App;
