import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './containers/Home';
import Favorites from './components/Favorites';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import Card from './containers/Card';
import DataContext from './provider';


function App() {
  const [listItems, setListItems] = useState([]);  //  список товаров
  const [listFavor, setListFavor] = useState([]);  //  список избранного
  const [itemDetails, setItemDetails] = useState({});  //  детали одного товара
  const [pairingDetails, setPairingDetails] = useState([]);  //  детали одного товара - список еды
  const [searchValue, setSearchValue] = useState('');  //  карточки из поиска
 
  const [itemID, setItemID] = React.useState(0);
  const value = { itemID, setItemID };
  
  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
    .then((res) => {
      setListItems([...listItems, ...res.data]);
      // console.log(res.data);
    })
  }, []);

  // получить список по имени
  // const valueName = 'end of history';
  // useEffect(() => {
  //   axios.get(`https://api.punkapi.com/v2/beers?beer_name=${valueName}`)
  //   .then((res) => {
  //     setListItems([...listItems, ...res.data]);
  //     console.log(res.data);
  //   })
  // }, []);

  

  useEffect(() => {
    if(itemID) {
      axios.get(`https://api.punkapi.com/v2/beers/${itemID}`)
      .then((res) => {
        if(res && res.data && res.data.length) {
          setItemDetails(res.data[0]);
          setPairingDetails(res.data[0].food_pairing);
          // console.log(res.data);
          // console.log(res.data[0]);
          // console.log(res.data[0].food_pairing);
        }     
      })    
    };
  }, [itemID]);


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

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <Header />      
      <DataContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<Home 
            listItems={listItems} 
            onAddToFavor={onAddToFavor} 
            isItemAddtoFavor={isItemAddtoFavor} 
            onChangeInput={onChangeInput}
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            />}>
          </Route>
          <Route path='/signup' element={<SignUpPage />}>
          </Route>
          <Route path='/signin' element={<SignInPage />}>
          </Route>
          <Route exact path='/carditem' element={<Card listDetails={itemDetails} listPairing={pairingDetails} />}>
          </Route>
                  
          <Route path='/favorites' element={<Favorites listFavor={listFavor} />}>
          </Route>
        </Routes>     
      </DataContext.Provider>      
    </>
  );
}

export default App;
