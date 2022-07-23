import React from 'react';
// import Goods from './Goods';


export default function Home({ listItems }) {
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
            <h3 className='goods__name'>{item.name}</h3>
            <span className='goods__tagline'>{item.tagline}</span>
            <span className='goods__prod-date'>First brewed: {item.first_brewed}</span>
            <p className='goods__description'>{item.description}</p>
            <p className='goods__pairing'>Enjoy it with: {item.food_pairing}</p>
            <p className='goods__tips'>Brewers tips: {item.brewers_tips} from: {item.contributed_by}</p>
            <img className='goods__img' src={item.image_url} />


          </div>
        ))}   
      </div>
    </div>
  )
}