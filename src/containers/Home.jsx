import React, {useState} from "react";
import { useCallback } from 'react';
import { useDispatch } from "react-redux";
import HomeCards from '../components/HomeCards';
import HomeIntro from '../components/HomeIntro';
import { addHistory } from "../store/userSlice";
import { useAuth } from '../hooks/auth';
import { debounce } from '../utility/debounce';

export default function Home({ listItems, onAddToFavor, isItemAddtoFavor }) {
  const {isAuth, login} = useAuth();

  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const debouncedItems = useCallback(debounce(listItems), []);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    debouncedItems(event.target.value);
  }

  const onSubmit = () => {
    if(isAuth) {
      dispatch(addHistory(value));
    }
	}

  return (
    <div className='main'>
      {<HomeIntro />}      
   
      <div className='main__search flex'>
        <div className='main__input-box'>
          <input className='main__input-field input' type='text' placeholder="find by name..." 
          onChange={onChangeInput} value={value}/>
          {value && <img className='search__clear' src='./img/close.svg' alt='img-clear' onClick={() => setValue('')}/>}
        </div>                   
        <input className='main__input-btn btn' type="text" placeholder="add to history" onClick={onSubmit} />
      </div>
      
      <div className='main__list goods flex--wrap'>
        {listItems
        .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        .map((item, index) => (
          <div className='goods__card' key={index}>
            <HomeCards
              id={item.id}
              name={item.name}
              tagline={item.tagline}
              brewed={item.first_brewed}
              img={item.image_url}
              onClickToFavor={(obj) => onAddToFavor(obj)}
              onClickLike={isItemAddtoFavor}
            />
          </div>         
        ))}   
      </div>
    </div>
  )
}
