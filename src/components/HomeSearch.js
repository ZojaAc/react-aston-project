import React from "react";

export default function HomeSearch() {
  return (
    <>
      <div className='main__description'>
        Here you can find all the bestsellers of the world brewing and more information about any beer: 
        the first date brewed, a taste description, which food is more pairing, 
        and an interesting bonus - get a tips from a famous brewers.
      </div>
      <div className='main__search flex'>
        <div className='main__input-box'>
          <input className='main__input-field input' />
        </div>        
        <button className='main__input-btn btn'>искать</button>
      </div>
    </>
  )
}