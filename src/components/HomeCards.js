import React from 'react';

export default function HomeCards({ 
  id, name, tagline, brewed, description, pairing, tips, authTips, img, onClickToFavor, onClickLike
  }) {

  const clickAddToFavor = () => {
    onClickToFavor({id, name});  //  добавит в избранное
    onClickLike(id);  //  поменяет картинку
  }

  return (   
    <>
      <div>
        <h3 className='goods__name'>{name}</h3>
        <span className='goods__tagline'>{tagline}</span>
        <span className='goods__prod-date'>First brewed: {brewed}</span>
        <p className='goods__description'>{description}</p>
        <p className='goods__pairing'><b>Enjoy it with:</b> {pairing.map((pair, i) => (`${pairing[i] + ', '}`))}</p>
        <p className='goods__tips'><b>Brewers tips:</b> {tips} from: {authTips}</p>
      </div>
      <img className='goods__img' src={img} alt='good-img' />
      <button className='goods__btn-like' onClick={clickAddToFavor}>
        <img className='goods__btn-like-img' src={onClickLike(id) ? '/img/liked.svg' : '/img/like.svg'} alt='like-img' />
      </button>
      <button className='goods__btn-more btn'>
        <span className='goods__btn-more-txt'>more</span>
        <img className='goods__btn-more-img' src='./img/more.svg' alt='more-img' />
      </button>
    </>
  )
}