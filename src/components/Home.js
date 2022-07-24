import React from 'react';
// import { useState } from 'react';
// import Goods from './Goods';


export default function Home({ listItems }) {
  const [addFavor, setAddFavor] = React.useState(false);
  // поменять false на переменную, сейчас меняет для всех карточек

  const onClickFavor = () => {
    setAddFavor(!addFavor);  //  поменять картинку
  }
  

  return (
    <div className='main'>
      <div className='main__description'>
        Here you can find all the bestsellers of the world brewing 
        and more information about any beer: 
        the first date brewed, a taste description, 
        which food is more pairing, 
        and an interesting bonus - get a tips from a famous brewers.
      </div>
      <div className='main__search flex'>
        <div className='main__input-box'>
          <input className='main__input-field input' />
        </div>        
        <button className='main__input-btn btn'>искать</button>
      </div>
      <div className='main__list goods'>
        {listItems.map((item) => (
          <div className='goods__card' key={item.id}>
            <div>
              <h3 className='goods__name'>{item.name}</h3>
              <span className='goods__tagline'>{item.tagline}</span>
              <span className='goods__prod-date'>First brewed: {item.first_brewed}</span>
              <p className='goods__description'>{item.description}</p>
              <p className='goods__pairing'><b>Enjoy it with:</b> {item.food_pairing.map((pair, i) => (`${item.food_pairing[i] + ', '}`))}</p>
              <p className='goods__tips'><b>Brewers tips:</b> {item.brewers_tips} from: {item.contributed_by}</p>
            </div>
            <img className='goods__img' src={item.image_url} alt='good-img' />
            <button className='goods__btn-like' onClick={onClickFavor}>
              <img className='goods__btn-like-img' src={addFavor ? '/img/liked.svg' : '/img/like.svg'} alt='like-img' />
            </button>
            <button className='goods__btn-more btn'>
              <span className='goods__btn-more-txt'>more</span>
              <img className='goods__btn-more-img' src='./img/more.svg' alt='more-img' />
            </button>
          </div>
        ))}   
      </div>
    </div>
  )
}