import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Entrance from './components/Entrance';
import Registry from './components/Registry';


function App() {
  return (
    <>
      <Header />      
      
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/entrance' element={<Entrance />}>
        </Route>
        <Route path='/registry' element={<Registry />}>
        </Route>
      </Routes>     

    </>
  );
}

export default App;
