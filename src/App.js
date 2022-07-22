import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  // const [listItems, setListItems] = React.useState([]);

  
  return (
    <>
      <Header />      
      
      <Routes>
        <Route path='/' element={<Home />}>
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
