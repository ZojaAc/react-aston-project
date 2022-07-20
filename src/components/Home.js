import React from 'react';


export default function Home() {
  return (
    <div className='main'>
      <div className='main__description'>Описание сайта</div>
      <div className='main__search flex'>
        <div className='main__input-box'>
          <input className='main__input-field input' />
        </div>        
        <button className='main__input-btn btn'>искать</button>
      </div>
    </div>
  )
}